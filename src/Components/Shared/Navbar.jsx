import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AurhProviders/AuthProvider";

const Navbar = () => {

    const { user, isLaoding, logOut } = useContext(AuthContext);

    const navOptions = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li><a>Biodatas</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
        {
            user && <li>
                <NavLink to="/">Dashboard</NavLink>
            </li>
        }
    </>

    const handleSignOut = () => {
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
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl ">
                    <span>Shadi-Alap</span>
                    <img src="../../../src/assets/nikah-logo2.png" className="w-[50px] h-[30px] " alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
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
                                    <a className="justify-between">
                                        {user.displayName ? user.displayName : "null"}
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to='/'>Dashboard</Link>
                                </li>
                                <li><a>{user.email ? user.email : "null"}</a></li>
                                <li><a href="/" onClick={handleSignOut}><button>Logout</button></a></li>
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