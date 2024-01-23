import { Link } from "react-router-dom";
import useContactRequest from "../../../Hooks/useContactRequest";
import useContactRequestUserSide from "../../../Hooks/useContactRequestUserSide";

const ContactRequest = () => {
    const [ContactRequestsUser, isLoadingContactRequest,refetch] = useContactRequestUserSide();
    if (isLoadingContactRequest) {
        return <span className="loading loading-bars"></span>
    }
    console.log(ContactRequestsUser);
    const handleDelete =() => {
        console.log('clicked on delete button')
    }
    return (
        <div>
            <h2>Contact Request</h2>
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
                            ContactRequestsUser.map((item,index) =>
                                <tr key={item._id}>
                                    <td>{index+1}</td>
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
                                        <p className={item.requestSuccessStatus === 'approved'? "badge badge-success text-white": "badge badge-error text-white"}>{item.requestSuccessStatus}</p>
                                    </td>
                                    <td>
                                        {
                                            item.requestSuccessStatus === 'pending'? "******": <span>{item.requestedForPhoneNumber}</span>
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