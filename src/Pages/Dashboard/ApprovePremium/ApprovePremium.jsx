import Swal from "sweetalert2";
import usePremiumRequest from "../../../Hooks/usePremiumRequest";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ApprovePremium = () => {
    const [premiumRequests, isLoading,refetch] = usePremiumRequest();
    console.log(premiumRequests);
    const axiosSecure = useAxiosSecure();
    const handlePremimum = async (id)=> {
        console.log(id)
        const res = await axiosSecure.patch(`/user/premium/${id}`)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                title: "User membership has been updated as a Premium user.",
                icon: "success",
                timer: 1500,
            });
            refetch();
        }
    }
    return (
        <div>
            <h2>Approve Premium</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Make Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            premiumRequests.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <p className="font-bold">{item.name}</p>
                                    </td>
                                    <td>
                                        <p>{item.email}</p>
                                    </td>
                                    <td>
                                        <p>{item._id}</p>
                                    </td>

                                    <td>
                                        {
                                            item.membership === 'premium' ? <p>Premimum User</p>
                                                :
                                                <button onClick={()=> handlePremimum(item?._id)} className="btn btn-outline">Make Premium</button>


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

export default ApprovePremium;