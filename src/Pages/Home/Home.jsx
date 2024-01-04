import Banner from "../../Components/Banner/Banner";
import SuccessCounter from "../../Components/SuccessCounter/SuccessCounter";
import SuccessStories from "../../Components/SuccessStories/SuccessStories";
import WebsiteWorks from "../../Components/WebsiteWorks/WebsiteWorks";
import UserCardHome from "./UserCard/UserCardHome";


const Home = () => {
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