import DasboardTitle from "../../../Components/Shared/DasboardTitle";
import ModalForStory from "../../../Components/Shared/ModalForStory";
import useSeccessStory from "../../../Hooks/useSeccessStory";

const AdminSuccessStories = () => {
    const [successStories, isLoadingSuccessStories, refetch] = useSeccessStory();
    return (
        <div>
            <DasboardTitle title={'Success Stories'}></DasboardTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Index</th>
                            <th>User Image</th>
                            <th>Name</th>
                            <th>Self Biodata ID</th>
                            <th>Partner Biodata ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            successStories.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-16 object-cover">
                                                <img src={item.userImage} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-bold">{item.userName}</p>
                                    </td>
                                    <td>
                                        <p>{item.selfBiodataID}</p>
                                    </td>
                                    <td>
                                        <p>{item.partnerBiodataId}</p>
                                    </td>
                                    <td >

                                        {/* The button to open modal */}
                                        <label htmlFor={`my_modal_${index}`} className="btn">View Story</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id={`my_modal_${index}`} className="modal-toggle" />
                                        <div className="modal" role="dialog">
                                            <div className="modal-box">
                                                <div className="flex items-center text-center">
                                                    <img className="max-w-80 mx-auto" src={item.coupleImageLink} alt="couple pic" />
                                                </div>
                                                <div className="py-2">
                                                    <p><span className="font-bold">Marraige Date: </span>{item.marriageDate}</p>
                                                    <p ><span className="font-bold">Our Story: </span>{item.successStory}</p>
                                                </div>
                                            </div>
                                            <label className="modal-backdrop" htmlFor={`my_modal_${index}`} >Close</label>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AdminSuccessStories;

//  {/* <ModalForStory key={item._id} item={item}></ModalForStory> */}
//  id={`my_Modal_${index}`} 