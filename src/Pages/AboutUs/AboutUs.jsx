import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import FoundingStory from "../../Components/FoundingStory/FoundingStory";
import TeamInformation from "../../Components/TeamInfomation/TeamInformation";

const AboutUs = () => {
    // const data = useLoaderData();
    // console.log('data: ', data);
    return (
        <div>
            {/* a banner section */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://blogs.ubc.ca/kimberleyleong/files/2017/02/teamwork-videos-smart-teamwork.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold font-serif">Empowering Connections, Building Futures</h1>
                        <p className="mb-5 font-semibold ">Discover a Platform Committed to Uniting Hearts and Creating Lasting Bonds. Our Mission is to Foster Love, Respect, and Compatibility in Every Relationship Journey</p>
                    </div>
                </div>
            </div>
            {/* founding story section */}
            <FoundingStory></FoundingStory>
            <TeamInformation></TeamInformation>
        </div>
    );
};

export default AboutUs;