import { Link } from "react-router-dom";
import useContactRequest from "../../../Hooks/useContactRequest";

const ContactRequest = () => {
    const [contactRequests, isLoading] = useContactRequest();
    if (isLoading) {
        return <span className="loading loading-bars"></span>
    }
    console.log(contactRequests);
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
                            contactRequests.map((item,index) =>
                                <tr key={item._id}>
                                    <td>{index+1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-16 object-cover">
                                                <img src={item.requestedPersonImage} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/detailsBioData/${item.requestedId}`}>
                                            <p className="font-bold btn-link btn text-black no-underline">{item.requestedForPersonName}</p>
                                        </Link>
                                    </td>
                                    <td>
                                        <p>{item.requestedId}</p>
                                    </td>
                                    <td>
                                        <p>{item.requestSuccessStatus}</p>
                                    </td>
                                    <td>
                                        <p>Mobile number</p>
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