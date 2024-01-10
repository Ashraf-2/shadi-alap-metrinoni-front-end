/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useBiodatas from "../../Hooks/useBiodatas";
import { calCulateAge } from "../../Functions/calculateAgeFn";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsBioData = () => {
    const { _id } = useParams()
    const [sameGenderData, setSameGenderData] = useState([]);
    // console.log(_id)
    const [biodatas, isLoading, isPending] = useBiodatas();       //load all biodatas
    const individual_info = biodatas.filter(item => item._id == _id);       //filter desired specific data of the user.
    console.log(individual_info);
    const { _id: id, image_url, gender, about_me, division_name, occupation, date_of_birth, full_name, membership } = individual_info[0];            //because after filtering 'individual_info' data is an array. and we need the first data of from the array.

    const age = calCulateAge(date_of_birth);        //calculate age of the user

    // if(isLoading || isPending){
    //     return <span className="loading loading-bars"></span>
    // }
    console.log(membership);

    useEffect(() => {
        axios.get(`http://localhost:5000/biodataGender/${gender}`)
            .then(res => {
                console.log('res.data', res.data);
                const othersData = res.data.filter(item => item._id != _id);
                console.log('others data: ', othersData);
                setSameGenderData(othersData);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-xl text-red-400">Details individual biodata</h2>
            <h2 className="text-center">this is details bio data page for user id: {_id}</h2>

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
                        {
                            membership?.membership === 'premium user' ? <p>Contact info: You will be given</p> : <p>Contact Info: Not Allowed</p>
                        }

                        <div className="text-center mt-5">
                            <button className="btn btn-success bg-pink-500 text-white border-none">Add to favourite</button>
                        </div>

                    </div>
                </div>
                <div className="md:w-4/12">
                    {/* right side information */}
                    <h2 className="text-xl font-medium text-center mb-5">You may like others!</h2>
                    <div className="grid grid-cols-1 gap-5">
                        {
                            sameGenderData.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
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