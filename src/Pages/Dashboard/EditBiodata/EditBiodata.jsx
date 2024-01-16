import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const EditBiodata = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className=" text-center font-medium">Complete/Edit Biodata</h2>
            <div className="bg-green-100 rounded-lg max-w-2xl mx-auto my-5">
                <form className="card-body">
                    <div className="flex flex-col md:flex-row gap-2 justify-between">
                        <div className="form-control w-2/3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <input type="text" name="email" placeholder="Gender" className="input input-bordered" required />
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
                            <input type="number" name="height" placeholder="heigh" className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Weight</span>
                            </label>
                            <input type="number" name="weight" placeholder="weight" className="input input-bordered" required />

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
                            <input type="text" name="occupation" placeholder="occupation" className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Race</span>
                            </label>
                            <input type="text" name="reace" placeholder="race" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Fathers name</span>
                            </label>
                            <input type="text" name="father-name" placeholder="fathers name" className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Mothers name</span>
                            </label>
                            <input type="text" name="mother-name" placeholder="mothers name" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Permanent Division name</span>
                            </label>
                            <input type="text" name="permanent-division-name" placeholder="division name" className="input input-bordered" required />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Present Division name</span>
                            </label>
                            <input type="text" name="present-division-name" placeholder="present division name" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 overflow-x-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expected Partner Age</span>
                            </label>
                            <input type="number" name="partner-age" placeholder="Expected Partner Age" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expected Partner Height</span>
                            </label>
                            <input type="number" name="expected-partner-height" placeholder="Expected Partner height" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expected Partner Weight</span>
                            </label>
                            <input type="number" name="expected-partner-weight" placeholder="Expected Partner weight" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contact Email</span>
                            </label>
                            <input type="text" name="email" placeholder={user?.email} className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="number" name="mobile-number" placeholder="Mobile Number" className="input input-bordered" />

                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Save and Publish biodata</button>
                    </div>
                    <p className="text-center">or</p>


                </form>
            </div>
        </div>
    );
};

export default EditBiodata;