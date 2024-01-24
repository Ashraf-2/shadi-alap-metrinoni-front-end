/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useBiodatas from "../../Hooks/useBiodatas";
import { calCulateAge } from "../../Functions/calculateAgeFn";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useOwnInfo from "../../Hooks/useOwnInfo";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useFavourites from "../../Hooks/useFavourites";

const DetailsBioData = () => {
    const { user } = useAuth();
    const { _id } = useParams()     //id of biodata holder person
    const [sameGenderData, setSameGenderData] = useState([]);
    const [biodatas, isLoading, isPending] = useBiodatas();       //load all biodatas
    const [favourites] = useFavourites();
    const [ownData, isLoadingOwnInfo] = useOwnInfo();   //user specifc information. [not biodata].
    console.log("user own data in database: ", ownData);


    const individual_info = biodatas?.find(item => item._id == _id);       //filter desired specific data of the user.
    const [isLoadingOthers, setIsloadingOthers] = useState(true);
    const [isFavourite, setIsFavourite] = useState(false);

    const axiosPublic = useAxiosPublic();
    // console.log(_id)
    // console.log('individual_info: ', individual_info);
    const {  _id: id, image_url, gender, division_name, occupation, date_of_birth, full_name,race,selectPresentDivision,email,mobile_number,partner_age,expected_partner_height,expected_partner_weight,father_name,mother_name, height,weight, about_me} = individual_info || {};            //because after filtering 'individual_info' data is an array. and we need the first data of from the array.

    const age = calCulateAge(date_of_birth);        //calculate age of the user

    //TODO: make favourite button disable if the favID already in user OwnData favourites.
    // const isExistFav = ownData?.favourites?.find((item) => item === _id)
    const isExistFav = favourites?.find((item) => item.refId_Favourite === _id)
    console.log("isExistFav: ", isExistFav);

    //get others gender biodata.
    useEffect(() => {
        axios.get(`http://localhost:5000/biodataGender/${gender}`)
            .then(res => {
                // console.log('res.data', res.data);
                const othersData = res.data.filter(item => item._id != _id);
                // console.log('others data: ', othersData);
                setSameGenderData(othersData);
                setIsloadingOthers(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [_id, gender])

    // if(isLoading ){
    //     return <span className="loading loading-bars"></span>
    // }


    // console.log('isFavourite outside after click: ---', isFavourite);
    const handleAddFavourite = async () => {
        const doc = {
            image_url_Favourite: individual_info?.image_url,
            full_name_Favourite: individual_info?.full_name,
            refId_Favourite: individual_info?._id,
            division_Favourite: individual_info?.division_name,
            occupation_Favourite: individual_info?.occupation,
            userEmail: user?.email,
        }
        const res = await axiosPublic.put('/favourite', doc)
        console.log(res.data);
        if (res.data?.insertedId) {
            console.log('favourite person added to the data base')
            setIsFavourite(true);
        }
    }
    return (
        <div>
            {/* <h2 className="text-center font-bold text-xl text-red-400">Details individual biodata</h2> */}
            <h2 className="text-center"><span className="font-semibold"> Biodata ID:</span> {_id}</h2>
            <div className="flex flex-col md:flex-row w-full gap-2 my-5">
                {/* left side information */}
                <div className="md:w-8/12 md:col-span-8">
                    {/* <h2>individual info</h2> */}
                    <figure className="max-w-xl mx-auto md:hover:scale-105 md:duration-200">
                        {/* bio pic */}
                        <img className="object-cover overflow-hidden rounded-lg " src={image_url} alt="image of the user" />
                        <figcaption className="text-center text-3xl font-bold">{full_name}</figcaption>
                    </figure>
                    <div className="text-left mx-10 my-5 text-xl">
                        {/* bio informaiton */}
                        <p><span className="font-bold">Date of birth:</span> {date_of_birth}</p>
                        <p><span className="font-bold">Age:</span> {age}</p>
                        <p><span className="font-bold">Gender:</span> {gender}</p>
                        <p><span className="font-bold">Height:</span> {height} Feet</p>
                        <p><span className="font-bold">Weight:</span> {weight} Kg</p>
                        <p><span className="font-bold">Occupation:</span> {occupation}</p>
                        <p><span className="font-bold">Race:</span> {race}</p>
                        <p><span className="font-bold">Parmanent Division:</span> {division_name}</p>
                        <p><span className="font-bold">Present Division:</span> {selectPresentDivision}</p>
                        <p><span className="font-bold">Expected Partner Age:</span> {partner_age} </p>
                        <p><span className="font-bold">Expected Partner Height:</span> {expected_partner_height} Feet</p>
                        <p><span className="font-bold">Expected Partner Weight:</span> {expected_partner_weight} Kg</p>
                        <p><span className="font-bold">Occupation:</span> {occupation}</p>
                       
                        <p> <span className="font-bold">About:</span> {about_me}</p>

                        {/* <p><span className="font-bold">Contact Info:</span> {
                            membership?.membership ==='premium user'? "You will get it": "Not allowed"
                        }</p> */}
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {/* contact visibility section */}
                            <p>
                                <span className="text-xl font-bold">Contact Number: </span>
                                {
                                    ownData?.membership === 'premium' ||  ownData.email === email ? <span>{mobile_number}</span> : <span>Not Allowed</span>
                                }
                            </p>
                            <div hidden={ownData.membership === 'premium' ||  ownData.email === email}>

                                <Link to={`/checkout/${id}`}>
                                    <button className="btn btn-outline hover:bg-lime-400 text-black hover:text-black hover:border-none">Request for contact info</button>
                                </Link>
                            </div>

                        </div>
                        {/* add favourite button */}

                        <div className="text-center mt-5">
                            <button disabled={isFavourite || isExistFav || ownData.email === email} style={{
                                backgroundColor: isFavourite || isExistFav ? '#C499F3' : '#FF9BD2',
                                color: isFavourite || isExistFav && "white",
                                opacity: 1,
                            }} onClick={handleAddFavourite} className="btn bg-pink-500 hover:bg-neutral  text-xl font-medium border-none">Add Favourite</button>
                            {
                                isExistFav && <p className="italic text-xs">*You already make that person favourite</p>
                            }
                        </div>

                    </div>
                </div>
                <div className="md:w-4/12">
                    {/* right side information - same gender users */}
                    <h2 className="text-xl font-medium text-center mb-5">You may like others!</h2>
                    <div className="grid grid-cols-1 gap-5">
                        {
                            isLoadingOthers && <div className="text-center">
                                <span className="loading loading-dots text-center"></span>
                            </div>
                        }
                        {

                            sameGenderData?.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                                <figure className="my-5">
                                    <img className="w-40 h-40 mx-auto rounded-full" src={item.image_url} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {item.full_name}</h2>
                                    <p>Age: {calCulateAge(item.date_of_birth)}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/detailsBioData/${item._id}`}>

                                            <button className="btn btn-ghost">See Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBioData;