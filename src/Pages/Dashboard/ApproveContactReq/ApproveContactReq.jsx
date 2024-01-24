import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useContactRequest from "../../../Hooks/useContactRequest";
import Dashboard from "../../../Layout/DashBoard/Dashboard";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";

const ApproveContactReq = () => {
    const [contactRequests, isLoading,refetch] = useContactRequest(); 
    console.log(contactRequests)
    const axiosSecure = useAxiosSecure();

    const handleApproveContactRequest = async (id)=> {
        console.log(id);
        const res = await axiosSecure.patch(`/contact-request/approve/${id}`)
        if(res.data?.modifiedCount> 0){
            Swal.fire({
                position: "top-end",
                title: "Contact request approved successfully!",
                icon: "success",
                timer: 1500,
            });
            refetch();
        }
    }
    if(isLoading){
        return <div className=" flex items-center min-h-screen justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div>
            <DasboardTitle title={"Approve Contact Request"}></DasboardTitle>
            <h2 className="text-center mb-5 text-xl font-serif ">{contactRequests? `Contact Requests: ${contactRequests.length}`: "No contact request found"}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Index</th>
                            <th>Requester Name</th>
                            {/* <th>Requester Id</th> */}
                            <th>Requester Email</th>
                            <th>Biodata Name (Requesting for)</th>
                            <th>Biodata Id (Requesting For)</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            contactRequests.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <p className="font-bold">{item.requesterPersonName}</p>
                                    </td>
                                    {/* <td>
                                        <p>{item.requesterPersonId}</p>
                                    </td> */}
                                    <td>
                                        <p>{item.requesterPersonEmail}</p>
                                    </td>
                                    <td>
                                        <p>{item.requestedForPersonName}</p>
                                    </td>
                                    <td>
                                        <p>{item.requestedForId}</p>
                                    </td>
                                    <td>
                                        {
                                            item.requestSuccessStatus === 'pending' ?
                                                <button onClick={() => handleApproveContactRequest(item?._id)} className="btn btn-outline">Approve</button>
                                                :
                                                <p className="badge badge-success text-sm text-white">Approved</p>
                                        }
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

export default ApproveContactReq;