import Banner from "../../Components/Banner/Banner";
import UserCardHome from "./UserCard/UserCardHome";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center font-bold">this is home page</h2>
            <UserCardHome></UserCardHome>
        </div>
    );
};

export default Home;