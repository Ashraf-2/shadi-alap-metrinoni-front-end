import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
    // TODO: use useAdmin from server to get the perfect dashboard 
    const { logOut } = useAuth();
    // const isAdmin = true;      //fokirana style
    const [isAdmin, isAdminLoading] = useAdmin();
    const navigate = useNavigate();
    console.log(isAdmin)
    if (isAdminLoading) {
        return <span className="loading loading-ring"></span>
    }
    
    const handleToSignOut = () => {
        logOut()
        navigate('/');
    }
    return (
        <div className="flex ">
            <div className="w-72  min-h-screen bg-pink-300 fixed">
                {/* left side */}
                <h1 className="pt-5 px-6 text-2xl text-center font-bold">Shadi-Alap</h1>
                <ul className="menu space-y-1 p-4 ">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={'/dashboard/adminDashBoard'}>Admin DashBoard</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageUsers'}>Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/approvePremium'}>Approve Premium</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/approveContact'}>Approve Contact</NavLink>
                                </li>

                            </>
                            :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/viewBiodata'}>View Biodata</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/editBiodata'}>Edit Biodata</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/contactRequest'}>My Contact Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/favouriteBiodata'}>My Favourite Friends</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/gotMarried'}>Get Merried Success</NavLink>
                                </li>
                            </>

                    }
                    <div className="divider"></div>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                    </ul>
                    <button onClick={handleToSignOut} className="btn btn-outline text-center text-lg mt-6">Log Out</button>
                </ul>
            </div>
            {/* w-[calc(100%-288px)] --> not working if i used fixed for the left side */}
            <div className="flex-1 ml-72 overflow-y-auto px-4">
                {/* right side */}
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;