import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    // TODO: use useAdmin from server to get the perfect dashboard 

    // const isAdmin = true;      //fokirana style
    const [isAdmin, isLoading] = useAdmin();
    console.log(isAdmin)
    if(isLoading){
        return <span className="loading loading-ring"></span>
    }
    return (
        <div className="flex ">
            <div className="w-72  min-h-screen bg-blue-300">
                {/* left side */}
                <h1 className="pt-5 px-6 text-2xl text-center font-bold">Shadi-Alap</h1>
                <ul className="menu p-4">
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
                                <p>no admin</p>
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

                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* w-[calc(100%-288px)] --> not working if i used fixed for the left side */}
            <div className="flex-1  mx-auto scroll p-4">
                {/* right side */}
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;