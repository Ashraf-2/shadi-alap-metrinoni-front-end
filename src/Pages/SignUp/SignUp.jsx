import { useContext, useState } from "react";
import { AuthContext } from "../../AurhProviders/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SignUp = () => {
    const { user, isLoading, registerUser, updateUserProfile, googleLoginInPopUp, setIsNewUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photo_url.value;
        console.log(name, email, password, photoUrl);

        registerUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUserProfile(name, photoUrl)
                    .then(res => {
                        // alert('you are logged in')
                        const userInfo = {
                            name: name,
                            email: email,
                            membership: "normal",
                            role: "user"
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res);
                                setIsNewUser(true);
                            })
                            .catch(error => {
                                console.log(error);
                            })
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }


    const handleGoogleSignIn = () => {
        googleLoginInPopUp()
            .then(result => {
                console.log(result.user);
                swal({
                    title: "Congratulations!",
                    text: "Login successfully!",
                    icon: "success",
                    buttons: false,
                    timer: 1000,
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content max-w-5xl mx-auto flex-col lg:flex-row">
                <div className="text-center lg:w-5/12 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum voluptate expedita.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* signup form */}
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo_url" placeholder="photo link" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-info"></input>
                        </div>
                        <div>
                            <Link to="/login">Do not have account? Here <span className="font-bold">Log in</span> </Link>
                        </div>
                        <div onClick={handleGoogleSignIn} className="flex justify-center">
                            <button className="flex justify-center items-center text-2xl text-red-600 btn btn-circle"><FcGoogle /> </button>
                        </div>
                    </form>
                    {/* <GoogleLogin></GoogleLogin> */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;