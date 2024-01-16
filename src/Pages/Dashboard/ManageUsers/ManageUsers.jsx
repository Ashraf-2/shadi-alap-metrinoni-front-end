import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
    const [users, isLoading] = useUsers();
    // console.log(users);
    if(isLoading){
        return <span className="loading loading-ring"></span>
    }
    return (
        <div>
            <h2>Manage Users</h2>
            <p>All users: {users.length}</p>
        </div>
    );
};

export default ManageUsers;