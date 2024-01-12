/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useBiodatas from "../../Hooks/useBiodatas";
import { calCulateAge } from "../../Functions/calculateAgeFn";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useOwnInfo from "../../Hooks/useOwnInfo";

const DetailsBioData = () => {
    const { _id } = useParams()
    const [sameGenderData, setSameGenderData] = useState([]);
    const [biodatas, isLoading, isPending] = useBiodatas();       //load all biodatas

    const [ownData, isLoadingOwnInfo] = useOwnInfo();
    console.log("user own data in database: ",ownData);

    const individual_info = biodatas?.find(item => item._id == _id);       //filter desired specific data of the user.
    const [isLoadingOthers, setIsloadingOthers] = useState(true);
    const [isFavourite, setIsFavourite] = useState(false);

    const axiosPublic = useAxiosPublic();
    // console.log(_id)
    // console.log('individual_info: ', individual_info);
    const { _id: id, image_url, gender, about_me, division_name, occupation, date_of_birth, full_name, membership } = individual_info || {};            //because after filtering 'individual_info' data is an array. and we need the first data of from the array.

    const age = calCulateAge(date_of_birth);        //calculate age of the user
    
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

    if(isLoading || isPending){
        return <span className="loading loading-bars"></span>
    }
  
    

    //section: for checkout
    const normal_user = true;


    
    const handleFavourite = async () => {
        // console.log('isFavourite outside before click: ---', isFavourite);

        setIsFavourite(!isFavourite);
        // console.log('isFavourite outside after click: ---', isFavourite);

        //TODO-1: if isFavourite === true ---> then use 'add' api to add the desired person in the favourite list of the user.
        //TODO-2: if isFavourite === false --> then use 'delete' api to delete the desired person from the favourite list of the user.
        
        const body = {
            favouriteID: _id       //this is fav id
            // userOwnID: ownData._id,
            // userOwnEmail: ownData.email,
        }
        console.log('userOwnID', body.userOwnID);
        const res = await axiosPublic.patch(`/favouriteID/${ownData._id}`, body)
        console.log(res.data);

    }

    // console.log('isFavourite outside after click: ---', isFavourite);

    return (
        <div>
            <h2 className="text-center font-bold text-xl text-red-400">Details individual biodata</h2>
            <h2 className="text-center">this is details bio data page for user id: {_id}</h2>
            <h2 className="text-center text-red-800 font-bold">this user is a normal user</h2>

            <div className="flex flex-col md:flex-row w-full gap-2 my-10">
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
                        <p> <span className="font-bold">About:</span> {about_me}</p>
                        <p><span className="font-bold">Age:</span> {age}</p>
                        <p><span className="font-bold">Gender:</span> {gender}</p>
                        <p><span className="font-bold">Division:</span> {division_name}</p>
                        <p><span className="font-bold">Occupation:</span> {occupation}</p>
                        <p><span className="font-bold">Membership:</span> {membership}</p>
                        {/* <p><span className="font-bold">Contact Info:</span> {
                            membership?.membership ==='premium user'? "You will get it": "Not allowed"
                        }</p> */}
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {/* contact visibility section */}
                            <p>
                                <span className="text-xl font-bold">Contact: </span>
                                {
                                    normal_user ? <span>You will not be given the contact info</span> : <span>Allowed</span>
                                }
                            </p>
                            <Link to={`/checkout/${id}`}>
                                <button hidden={!normal_user} className="btn btn-outline hover:bg-lime-400 text-black hover:text-black hover:border-none">Request for contact info</button>
                            </Link>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                        </div>
                        {/* favourite button */}
                        <div className="text-center mt-5">
                            <button style={{
                                backgroundColor: isFavourite ? '#C499F3' : '#FF9BD2',
                                opacity: 1,
                            }}
                                onClick={handleFavourite}
                                className="btn bg-pink-500 hover:bg-neutral  text-xl font-medium border-none">{isFavourite ? "Remove Favourite" : "Add to Favourite"}
                            </button>
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
                                        <button className="btn btn-ghost">See Details</button>
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