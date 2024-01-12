import Swal from "sweetalert2";
import Banner from "../../Components/Banner/Banner";
import SuccessCounter from "../../Components/SuccessCounter/SuccessCounter";
import SuccessStories from "../../Components/SuccessStories/SuccessStories";
import WebsiteWorks from "../../Components/WebsiteWorks/WebsiteWorks";
import useAuth from "../../Hooks/useAuth";
import UserCardHome from "./UserCard/UserCardHome";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { isNewUser } = useAuth();
    const navigate = useNavigate();

    // if (isNewUser) {
    //     // return alert('please complete your profile.')

    //     //return Swal.fire({
    //     //     title: "You are a new user to our website!",
    //     //     text: "Please complete your profile first!",
    //     //     icon: "success",
    //     //     showCancelButton: true,
    //     //     confirmButtonColor: "#3085d6",
    //     //     cancelButtonColor: "#d33",
    //     //     confirmButtonText: "Ok, complete profile.."
    //     // }).then((result) => {
    //     //     if (result.isConfirmed) {
    //     //         navigate('/biodatapage');
    //     //     }
    //     // });
    // }
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center font-bold">this is home page</h2>
            <UserCardHome></UserCardHome>
            <WebsiteWorks></WebsiteWorks>
            <SuccessCounter></SuccessCounter>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;