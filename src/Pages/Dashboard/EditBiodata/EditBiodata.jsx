import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useOwnBiodata from "../../../Hooks/useOwnBiodata";

const EditBiodata = () => {
    const { user } = useAuth();
    const [selectGender, setSelectGender] = useState('');
    const [selectParmanentDivision, setSelectParmanentDivision] = useState('');
    const [selectPresentDivision, setSelectPresentDivision] = useState('');
    const axiosPublic = useAxiosPublic();

    const [ownBioData,refetch,isLoadingOwnBiodataInfo] = useOwnBiodata();
    console.log('own biodata: ', ownBioData)
    const handleGender = (e) => {
        const gender = e.target.value;
        console.log(gender);
        setSelectGender(gender);
    }
    const handleParmanentDivision = (e) => {
        const parmanentDivision = e.target.value;
        console.log(parmanentDivision);
        setSelectParmanentDivision(parmanentDivision);

    }
    const handlePresentDivision = (e) => {
        const presentDivision = e.target.value;
        console.log(presentDivision);
        setSelectPresentDivision(presentDivision);

    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const full_name = e.target.name.value;
        const image_url = e.target.profile_image.value;
        const date_of_birth = e.target.dob.value;
        const height = parseFloat(e.target.height.value);
        // const height = parseFloat(h)
        const weight = parseFloat(e.target.weight.value);
        const occupation = e.target.occupation.value;
        const race = e.target.race.value;
        const father_name = e.target.father_name.value;
        const mother_name = e.target.mother_name.value;
        // const permanent_division_name = e.target.permanent_division_name.value;
        // const present_division_name = e.target.present_division_name.value;
        const partner_age = e.target.partner_age.value;
        const expected_partner_height = e.target.expected_partner_height.value;
        const expected_partner_weight = e.target.expected_partner_weight.value;
        const email = user?.email;
        const mobile_number = e.target.mobile_number.value;
        const about_me = e.target.about_me.value;

        const biodata = {
            full_name,
            gender: selectGender,
            image_url,
            date_of_birth,
            height, weight,
            occupation,
            race,
            father_name,
            mother_name,
            division_name: selectParmanentDivision,
            selectPresentDivision,
            partner_age,
            expected_partner_height,
            expected_partner_weight,
            email,
            mobile_number,
            about_me,
        }

        console.log(biodata);

        //post biodata to the server.
        const res = await axiosPublic.patch(`/biodata/${user?.email}`, biodata);
        console.log(res.data);

    }
    return (
        <div>
            <h2 className=" text-center font-medium">Complete/Edit Biodata</h2>
            <div className="bg-green-100 rounded-lg max-w-2xl mx-auto my-5">
                <form onSubmit={handleSubmitForm} className="card-body">
                    <div className="flex flex-col md:flex-row gap-2 justify-between">
                        <div className="form-control w-2/3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder={ownBioData.full_name? ownBioData.full_name:"full name"} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select value={selectGender} onChange={handleGender} className="select w-full max-w-xs" required>
                                <option value='' disabled>Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>

                            </select>
                            {/* <input type="text" name="email" placeholder="Gender" className="input input-bordered" required /> */}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Imgae link</span>
                        </label>
                        <input type="text" name="profile_image" placeholder="image link" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <input type="date" name="dob" className="input input-bordered" required />

                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Height</span>
                            </label>
                            <input type="text" name="height" placeholder={ownBioData.height?ownBioData.height:"height"} className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Weight</span>
                            </label>
                            <input type="text" name="weight" placeholder={ownBioData.weight?ownBioData.weight:"weight"} className="input input-bordered" required />

                        </div>
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input type="number" name="age" placeholder="Age" className="input input-bordered" required />

                    </div> */}
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Occupation</span>
                            </label>
                            <input type="text" name="occupation" placeholder={ownBioData.occupation?ownBioData.occupation:"Occupation"} className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Race</span>
                            </label>
                            <input type="text" name="race" placeholder={ownBioData.race?ownBioData.race:"race"} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Fathers name</span>
                            </label>
                            <input type="text" name="father_name" placeholder={ownBioData.father_name?ownBioData.father_name:"father name"} className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Mothers name</span>
                            </label>
                            <input type="text" name="mother_name" placeholder={ownBioData.mother_name?ownBioData.mother_name:"mother name"} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Permanent Division name</span>
                            </label>
                            {/* <input type="text" name="permanent_division_name" placeholder="division name" className="input input-bordered" required /> */}
                            <select value={selectParmanentDivision} onChange={handleParmanentDivision} className="select w-full max-w-xs" required>
                                <option value='' disabled>Parmanent Division</option>
                                <option value='Dhaka'>Dhaka</option>
                                <option value='Mylhet'>Maymanshingh</option>
                                <option value='Sylhet'>Sylhet</option>
                                <option value='Borishal'>Borishal</option>
                                <option value='Chattogram'>Chattogram</option>
                                <option value='Rangpur'>Rangpur</option>
                                <option value='Rajshahi'>Rajshahi</option>

                            </select>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Present Division name</span>
                            </label>
                            {/* <input type="text" name="present_division_name" placeholder="present division name" className="input input-bordered" required /> */}
                            <select value={selectPresentDivision} onChange={handlePresentDivision} className="select w-full max-w-xs" required>
                                <option value='' disabled>Present Division</option>
                                <option value='Dhaka'>Dhaka</option>
                                <option value='Mylhet'>Maymanshingh</option>
                                <option value='Sylhet'>Sylhet</option>
                                <option value='Borishal'>Borishal</option>
                                <option value='Chattogram'>Chattogram</option>
                                <option value='Rangpur'>Rangpur</option>
                                <option value='Rajshahi'>Rajshahi</option>

                            </select>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 overflow-x-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expected Partner Age</span>
                            </label>
                            <input type="number" name="partner_age" placeholder={ownBioData.partner_age?ownBioData.partner_age:"partner Age"} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expected Partner Height</span>
                            </label>
                            <input type="text" name="expected_partner_height" placeholder={ownBioData.expected_partner_height?ownBioData.expected_partner_height:"partner height"} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expected Partner Weight</span>
                            </label>
                            <input type="text" name="expected_partner_weight" placeholder={ownBioData.expected_partner_weight?ownBioData.expected_partner_weight:"partner weight"} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contact Email</span>
                            </label>
                            <input type="text" name="email" value={user?.email} className="input input-bordered" readOnly />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="text" name="mobile_number" placeholder={ownBioData.mobile_number?ownBioData.mobile_number:"mobile number"} className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">About Me</span>
                        </label>
                        <input type="text" name="about_me" placeholder={ownBioData.about_me?ownBioData.about_me:"about me"} className="input input-bordered" />

                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary text-black hover:text-white">Save and Publish biodata</button>
                    </div>
                    <p className="text-center">or</p>


                </form>
            </div>
        </div>
    );
};

export default EditBiodata;