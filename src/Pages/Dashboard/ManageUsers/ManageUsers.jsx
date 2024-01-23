import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
    const { user } = useAuth();
    const [users, isLoading, refetch] = useUsers();
    const axiosSecure = useAxiosSecure();

    if (isLoading ) {
        return <span className="loading loading-ring"></span>
    }
    console.log(users)
    // console.log(users.map(item => console.log(item)));

    const handleAdmin = async (id) => {
        console.log('user id: ', id);
        const res = await axiosSecure.patch(`/user/admin/${id}`)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                title: "User roll has been updated as admin.",
                icon: "success",
                timer: 1500,
            });
            refetch();
        }
    }

    const handlePremimum = async (id)=> {
        console.log(id)
        const res = await axiosSecure.patch(`/user/premium/${id}`)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                title: "User membership has been updated as a Premium user.",
                icon: "success",
                timer: 1500,
                showCloseButton: false,
            });
            refetch();
        }
    }

    return (
        <div>
            <h2>Manage Users</h2>
            <p>All users: {users.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Premium</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((item, index) =>
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
                                        {
                                            item.membership === 'premium' ? <p>Premimum User</p>
                                                :
                                                <button onClick={()=> handlePremimum(item?._id)} className="btn btn-outline">Make Premium</button>


                                        }
                                    </td>
                                    <td>
                                        {
                                            item.role === 'admin' ?
                                                <p className="badge badge-success text-sm text-white">Already Admin</p>
                                                :
                                                <button onClick={() => handleAdmin(item?._id)} className="btn btn-outline">Make Admin</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                        {/* <tr>

                           
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;