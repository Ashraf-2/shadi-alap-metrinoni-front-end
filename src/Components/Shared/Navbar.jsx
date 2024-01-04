import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navOptions = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li><a>Biodatas</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
    </>

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
            <div className="navbar-end gap-2">
                <Link to='/signUp'>
                    <button className="btn">Sign Up</button>
                </Link>
                {/* <a className="btn">Login</a>
                <a className="btn">Sign Up</a> */}
            </div>
        </div>
    );
};

export default Navbar;