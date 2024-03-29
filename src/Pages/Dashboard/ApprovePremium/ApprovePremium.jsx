import Swal from "sweetalert2";
import usePremiumRequest from "../../../Hooks/usePremiumRequest";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DasboardTitle from "../../../Components/Shared/DasboardTitle";
import useAuth from "../../../Hooks/useAuth";

const ApprovePremium = () => {
    const {user,isLoading} = useAuth();
    const [premiumRequests, isLoadingPremium, refetch] = usePremiumRequest();
    console.log(premiumRequests);
    const axiosSecure = useAxiosSecure();
    
    const handlePremimum = async (item) => {
        console.log(item)
        const res = await axiosSecure.patch(`/user/premium/${item._id}`)
        const res2 = await axiosSecure.patch(`/biodata/premium/${item.email}`)
        if (res.data?.modifiedCount > 0 && res2.data?.modifiedCount>0) {
            Swal.fire({
                position: "top-end",
                title: "User membership has been updated as a Premium user.",
                icon: "success",
                timer: 1500,
            });
            refetch();
        }
    }
    if (isLoadingPremium || isLoading) {
        return <div className='flex justify-center min-h-screen items-center text-center'>
            <span className='loading loading-bars loading-lg'></span>
        </div>
    }
    return (
        <div>
            <DasboardTitle title={"Approve Premium"}></DasboardTitle>
            <h2 className="text-center mb-5 text-xl font-serif ">{premiumRequests? `Premium Data: ${premiumRequests.length}`: "No premium users found"}</h2>
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
                                                <button onClick={() => handlePremimum(item)} className="btn btn-outline">Make Premium</button>


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