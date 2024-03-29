import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AurhProviders/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useOwnInfo from "../../Hooks/useOwnInfo";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { user, isLaoding, logOut } = useAuth();
    const [ownData, ,isLoadingOwnInfo] = useOwnInfo();
    // const isAdmin = true;
    const [isAdmin, isAdminLoading] = useAdmin();
    
    if(isLaoding || isLoadingOwnInfo || isAdminLoading){
        return <span className="loading loading-ring"></span>
    }

    const navLinks = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to='/biodatapage'>Biodata</NavLink>
        </li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
        {
            user && isAdmin && <li>
                <NavLink to="/dashboard/adminDashboard">Dashboard</NavLink>
            </li>
        }
        {
            user && !isAdmin && <li>
                <NavLink to="/dashboard/viewBiodata">Dashboard</NavLink>
            </li>
        }
    </>

    const handleToSignOut = () => {
        logOut()
            .then(res => console.log('log out successfull'))
            .catch(error => console.log(error))
    }

    if (isLaoding) {
        <span className="text-center loading loading-ball"></span>
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl ">
                    <span>Shadi-Alap</span>
                    <img src="/nikah-logo2.png" className="w-[50px] h-[30px] " alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {/* <div className="navbar-end"> */}
            <div className="navbar-end">
                {
                    user ?
                        <div className=" dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">
                                    <img src={user.photoURL ? user.photoURL : "no pic"} />
                                    {/* <p>{user.photoURL}</p> */}
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-700 dark:text-white">
                                <li>
                                    <span className="justify-between">
                                        {user.displayName ? user.displayName : "null"}
                                        <span className="badge badge-outline">{ownData?.role}</span>
                                    </span>
                                </li>
                                <li>
                                    {
                                        ownData?.role === 'user'?
                                        <Link to='/dashboard/viewBiodata'>Dashboard</Link>
                                        :
                                        <Link to='/dashboard/adminDashboard'>Dashboard</Link>
                                    }
                                </li>
                                <li><span>{user.email ? user.email : "null"}</span></li>
                                <li><button onClick={handleToSignOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to='/login'   ><button className="btn btn-ghost">Log in</button></Link>
                            <Link to='/signUp'><button className="btn btn-ghost">Sign Up</button></Link>
                        </div>
                }

            </div>

            {/* <a className="btn">Login</a>
                <a className="btn">Sign Up</a> */}
            {/* </div> */}
        </div>
    );
};

export default Navbar;