/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useContactRequestUserSide from "../../../Hooks/useContactRequestUserSide";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";

const ContactRequest = () => {
    const [ContactRequestsUser, isLoadingContactRequest, refetch] = useContactRequestUserSide();
   
    console.log(ContactRequestsUser);
    const handleDelete = () => {
        console.log('clicked on delete button')
    }

    // loading bar
    if (isLoadingContactRequest) {
        return <div className=" flex items-center min-h-screen justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div>
            <DasboardTitle title={"Contact Requests"}></DasboardTitle>
            <h2 className="text-center mb-5 text-xl font-serif ">{ContactRequestsUser? `Contact Requests: ${ContactRequestsUser.length}`: "No contact request found"}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Biodata Id</th>
                            <th>Status</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ContactRequestsUser.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-16 object-cover">
                                                <img src={item.requestedForPersonImage} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/detailsBioData/${item.requestedForId}`}>
                                            <p className="font-bold btn-link btn text-black no-underline">{item.requestedForPersonName}</p>
                                        </Link>
                                    </td>
                                    <td>
                                        <p>{item.requestedForId}</p>
                                    </td>
                                    <td>
                                        <p className={item.requestSuccessStatus === 'approved' ? "badge badge-success text-white" : "badge badge-error text-white"}>{item.requestSuccessStatus}</p>
                                    </td>
                                    <td>
                                        {
                                            item.requestSuccessStatus === 'pending' ? "******" : <span>{item.requestedForPhoneNumber}</span>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-outline">Delete</button>
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

export default ContactRequest;