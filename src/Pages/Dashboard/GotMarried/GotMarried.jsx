import Swal from "sweetalert2";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";
import useAuth from "../../../Hooks/useAuth";
import useBiodatas from "../../../Hooks/useBiodatas";
import useOwnBiodata from "../../../Hooks/useOwnBiodata";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import useSeccessStory from "../../../Hooks/useSeccessStory";
import { useState } from "react";

const GotMarried = () => {
    const { user } = useAuth();
    const [ownBioData, , isLoadingOwnBiodataInfo] = useOwnBiodata();
    const [biodatas, , isLoadingBiodata] = useBiodatas();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [successStories, isLoadingSuccessStories, refetch] = useSeccessStory();
    console.log(successStories);

    const isAlreadySucceed = successStories?.find(item => item.selfBiodataID === ownBioData?._id)
    // console.log(ownBioData);
    // console.log(isAlreadySucceed);

    const [rating, setRating] = useState(1);

    const handleRatingChange = (e) => {
        const targetedRating = e.target.value;
        console.log(targetedRating);
        setRating(parseInt(targetedRating));
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const form = e.target;

        const selfBiodataID = ownBioData?._id;
        const partnerBiodataId = form.partnerBiodataId.value;
        const coupleImageLink = form.coupleImageLink.value;
        const successStory = form.successStory.value;
        const marriageDate = form.marriageDate.value;
        const userName = ownBioData?.full_name;
        const occupation = ownBioData?.occupation;
        const userImage = ownBioData?.image_url;

        // console.log(selfBiodataID, partnerBiodataId, coupleImageLink, successStory, marriageDate, userName, occupation, userImage);

        const successStoryDoc = { selfBiodataID, partnerBiodataId, coupleImageLink, successStory, marriageDate, userName, occupation, userImage, rating }
        console.log(successStoryDoc)

        const isExistPartner = biodatas.find(item => item._id === partnerBiodataId);
        // console.log(isExistPartner);
       
        if (!isExistPartner) {
            return Swal.fire({
                position: 'top-right',
                timer: 3500,
                showCloseButton: false,
                text: 'Provide Valid Partner Biodata ID',
                title: "Partner Not Found!",
                icon: "error",
            })
        } else {
            const res = await axiosSecure.post('/successStory', successStoryDoc);
            console.log(res.data);
            if (res.data?.insertedId) {
                Swal.fire({
                    position: 'center',
                    timer: 3500,
                    showCloseButton: false,
                    text: 'Wish a happy lovely married life!',
                    title: "Congratulations!",
                    icon: "success",
                })
                refetch();
                navigate('/dashboard/gotMarried');
            }
        }
    }

    if (isLoadingOwnBiodataInfo || isLoadingBiodata || isLoadingSuccessStories) {
        return <div className="flex items-center min-h-screen justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div>
            <DasboardTitle title={"Get Married"}></DasboardTitle>
            <div>
                {
                    isAlreadySucceed ?
                        <div className="flex flex-col justify-center items-center px-10 py-5 rounded-lg bg-slate-600 text-white my-5 max-w-3xl mx-auto ">
                            <div className="flex justify-center flex-col items-center">
                                <img className="w-40 h-40 rounded-full" src={isAlreadySucceed.coupleImageLink} alt="" />
                                <p className="text-center text-xl mt-2">Got Married : {isAlreadySucceed.marriageDate}</p>
                            </div>
                            <div className="mt-4 text-xl">
                                <p className="border py-3 px-3 rounded-lg">{isAlreadySucceed.successStory}</p>
                                <div className="flex flex-row items-center justify-end text-right mt-2 gap-2">
                                    <img className="w-12 h-12 rounded-full text-right" src={isAlreadySucceed.userImage} alt="self image of the user" />
                                    <p className="text-right font-semibold text-2xl ">{isAlreadySucceed.userName}</p>
                                </div>
                                <p className="text-right font-normal ">{isAlreadySucceed.occupation}</p>
                            </div>
                        </div>
                        :
                        ownBioData ?
                            <div className="bg-green-100 rounded-lg max-w-2xl mx-auto my-5">
                                <form onSubmit={handleSubmitForm} className="card-body">

                                    <div className="flex flex-row items-center gap-2">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Self Biodata Id</span>
                                            </label>
                                            <input type="text" defaultValue={ownBioData._id} name="selfBiodataID" className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Partner Biodata Id</span>
                                            </label>
                                            <input type="text" name="partnerBiodataId" placeholder="Partner Biodata Id" className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Couple Image Link</span>
                                        </label>
                                        <input type="text" name="coupleImageLink" placeholder="Couple Image Link" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Success Story / Review</span>
                                        </label>
                                        <textarea type="text" name="successStory" className="resize w-full rounded-lg p-2" required></textarea>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <div className=" w-1/2 form-control ">
                                            <label className="label">
                                                <span className="label-text">Marraige Date</span>
                                            </label>
                                            <input type="date" name="marriageDate" className="input input-bordered" required />

                                        </div>
                                        {/* <div className=" w-1/2 form-control ">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input type="number" name="rating" min={'1'} max={'5'} value={rating} onChange={handleRatingChange} className="input input-bordered" required />

                                        </div> */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <select value={rating} onChange={handleRatingChange} className="select w-full max-w-xs" required>
                                                <option value='' disabled>Rating</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-secondary text-black hover:text-white">Save and Publish biodata</button>
                                    </div>
                                    <p className="text-center">or</p>
                                </form>
                            </div>
                            :
                            <div className="flex min-h-80 border flex-col items-center justify-center text-2xl font-serif">
                                <h2>You have not yet completed your biodata in our webiste.</h2>
                                <h2>Please, complete your <Link to={'/dashboard/editBiodata'}> <span className="text-xl btn btn-link px-0 py-0">Profile</span> </Link> first</h2>
                            </div>

                }
            </div>

        </div>
    );
};

export default GotMarried;