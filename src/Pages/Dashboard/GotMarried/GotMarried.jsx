import Swal from "sweetalert2";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";
import useAuth from "../../../Hooks/useAuth";
import useBiodatas from "../../../Hooks/useBiodatas";
import useOwnBiodata from "../../../Hooks/useOwnBiodata";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useSeccessStory from "../../../Hooks/useSeccessStory";

const GotMarried = () => {
    const { user } = useAuth();
    const [ownBioData, , isLoadingOwnBiodataInfo] = useOwnBiodata();
    const [biodatas, , isLoadingBiodata] = useBiodatas();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [successStories, isLoadingSuccessStories] = useSeccessStory();
    console.log(successStories);


    console.log(ownBioData);
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
        console.log(selfBiodataID, partnerBiodataId, coupleImageLink, successStory, marriageDate, userName, occupation);

        const successStoryDoc = { selfBiodataID, partnerBiodataId, coupleImageLink, successStory, marriageDate, userName, occupation }

        const isExistPartner = biodatas.find(item => item._id === partnerBiodataId);
        console.log(isExistPartner);
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
                navigate('/');
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
                        {/* <input type="text" name="succesStory" placeholder="Couple Image Link" className="textarea textarea-bordered textarea-lg resize w-full " required /> */}

                    </div>

                    <div className="flex flex-row items-center">
                        <div className=" w-1/2 form-control ">
                            <label className="label">
                                <span className="label-text">Marraige Date</span>
                            </label>
                            <input type="date" name="marriageDate" className="input input-bordered" required />

                        </div>
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

export default GotMarried;