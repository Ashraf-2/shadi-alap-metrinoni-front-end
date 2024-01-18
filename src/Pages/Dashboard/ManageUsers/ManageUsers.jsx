import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
    const [users, isLoading, isPending] = useUsers();
    if (isLoading || isPending) {
        return <span className="loading loading-ring"></span>
    }
    console.log(users)
    // console.log(users.map(item => console.log(item)));

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
                            <th>Make Admin</th>
                            <th>Make Premium</th>
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
                                        <button className="btn btn-outline">Make Premium</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline">Make Admin</button>
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