/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useOwnBiodata from "../../../Hooks/useOwnBiodata";
import { calCulateAge } from "../../../Functions/calculateAgeFn";
import useAuth from "../../../Hooks/useAuth";
import useOwnInfo from "../../../Hooks/useOwnInfo";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";

const ViewBiodata = () => {
    const [ownBioData, refetch, isLoadingOwnBiodataInfo] = useOwnBiodata();
    console.log(ownBioData);
    const { user, isLoading } = useAuth();
    const [isClickPremium, setIsClickPremium] = useState(false);

    const { _id: id, image_url, gender, division_name, occupation, date_of_birth, full_name, race, selectPresentDivision, email, mobile_number, partner_age, expected_partner_height, expected_partner_weight, father_name, mother_name, height, weight, about_me } = ownBioData;


    const axiosSecure = useAxiosSecure();
    const [ownData, , isLoadingOwnInfo, isPending] = useOwnInfo();
    console.log('owndata: ', ownData);

    console.log({ isLoading, isLoadingOwnBiodataInfo, isLoadingOwnInfo })

    if (isLoadingOwnBiodataInfo || isLoading || isLoadingOwnInfo) {
        return <div className=" flex items-center min-h-screen justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }


    // if (!ownBioData) {
    //     return <dir><p>No Biodata</p></dir>
    // }

    const handlePremimum = async (id) => {
        Swal.fire({
            title: "Are you sure to make Premium Membership?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Yes",
            // denyButtonText: `Don't save`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/user/MakePremium/${id}`)
                // console.log(res.data)
                if (res.data?.modifiedCount > 0) {
                    Swal.fire("Making Premium membership successfully sent to the admin!", "", "success");
                }
                setIsClickPremium(!isClickPremium)
            }
        });


    }
    return (
        <div>
            <DasboardTitle title={"View Biodata"}></DasboardTitle>
            {
                ownBioData ? <div>
                    <div className="card card-body border shadow-xl">
                        <div className="flex flex-col justify-center items-center">
                            <img className="rounded-lg shadow-xl" src={image_url} alt="user own image" />
                            <p className="text-center text-2xl mt-5" ><span className="font-bold">Name</span>: {full_name}</p>
                        </div>
                        <div className="mt-5">

                            <p className=""><span className="font-bold text-base">Membership ID</span>: {id}</p>
                            <p className=""><span className="font-bold text-base">Gender</span>: {gender}</p>
                            <p className=""><span className="font-bold text-base">Date Of Birth: {date_of_birth}</span></p>
                            <p className=""><span className="font-bold text-base">Height</span>: {height}</p>
                            <p className=""><span className="font-bold text-base">Weight</span>: {weight}</p>
                            <p className=""><span className="font-bold text-base">Age</span>: {calCulateAge(date_of_birth)}</p>
                            <p className=""><span className="font-bold text-base">Occupation</span>: {occupation}</p>
                            <p className=""><span className="font-bold text-base">Race</span>: {race}</p>
                            <p className=""><span className="font-bold text-base">Father Name</span>: {father_name}</p>
                            <p className=""><span className="font-bold text-base">Mother Name</span>: {mother_name}</p>
                            <p className=""><span className="font-bold text-base">Permanent Division</span>: {division_name}</p>
                            <p className=""><span className="font-bold text-base">Present Division</span>: {selectPresentDivision}</p>
                            <p className=""><span className="font-bold text-base">Expected Partner Age</span>: {partner_age}</p>
                            <p className=""><span className="font-bold text-base">Expected Partner Height</span>: {expected_partner_height}</p>
                            <p className=""><span className="font-bold text-base">Expected Partner Weight</span>: {expected_partner_weight}</p>
                            <p className=""><span className="font-bold text-base">Contact Email</span>: {email}</p>
                            <p className=""><span className="font-bold text-base">Mobile Number</span>: {mobile_number}</p>
                            <p className=""><span className="font-bold text-base">About Me</span>: {about_me}</p>
                        </div>
                    </div>
                    <div className="mt-5 text-right mr-10">
                        <button disabled={isClickPremium || ownData.premiumRequestStatus} onClick={() => handlePremimum(ownData?._id)} className="btn btn-outline bg-green-400 border-none">Make Premimum</button>
                    </div>
                </div>
                    :
                    <div>
                        <p>Please make complete your biodata first</p>
                        <Link to={'/dashboard/editBiodata'}>
                            <button className="btn btn-link">Complete Biodata</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default ViewBiodata;