import { Link } from "react-router-dom";
import useOwnBiodata from "../../../Hooks/useOwnBiodata";
import { calCulateAge } from "../../../Functions/calculateAgeFn";
import useAuth from "../../../Hooks/useAuth";
import useOwnInfo from "../../../Hooks/useOwnInfo";
const ViewBiodata = () => {
    const [ownBioData, isLoadingOwnBiodataInfo] = useOwnBiodata();
    console.log(ownBioData);
    const {user} = useAuth();

    const { _id: id, image_url, gender, division_name, occupation, date_of_birth, full_name, membership,race,selectPresentDivision,email,mobile_number,partner_age,expected_partner_height,expected_partner_weight,father_name,mother_name, height,weight, about_me} = ownBioData; 

    ////BIG PROBLEM ___ 
    // if(isLoadingOwnBiodataInfo){
    //     return <span className="loading loading-dots"></span>
    // }

    const [ownData,isLoadingOwnInfo]= useOwnInfo();
    console.log('owndata: ',ownData);
    const handlePremimum = (email)=> {
        console.log(email);
    }
    return (
        <div>
            <h2>View Biodata</h2>
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
                    <div onClick={()=> handlePremimum(user?.email)} className="mt-5 text-right mr-10">
                        <button className="btn btn-outline bg-green-400 border-none">Make Premimum</button>
                    </div>
                </div>
                    :
                    <div>
                        <p>please make complete your biodata first</p>
                        <Link to={'/dashboard/editBiodata'}>
                            <button className="btn btn-link">Complete Biodata</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default ViewBiodata;