import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import FoundingStory from "../../Components/FoundingStory/FoundingStory";
import TeamInformation from "../../Components/TeamInfomation/TeamInformation";
import FreeBacgroundImage from "./FreeBacgroundImage";

// const image1Link = 'https://media.istockphoto.com/id/1390160734/photo/shot-of-a-young-couple-on-the-beach-on-their-wedding-day.webp?b=1&s=170667a&w=0&k=20&c=aHGTNUjpHvWS_ulRkohNDWByZODnvpmatPjDMdgd8kY='
const image1Link = 'https://static.vecteezy.com/system/resources/previews/013/877/305/large_2x/man-and-woman-with-wedding-ring-young-married-couple-holding-hands-photo.jpg'
const image2Link = 'https://media.istockphoto.com/id/868924246/photo/bride-and-groom-enjoying-in-their-love.webp?b=1&s=170667a&w=0&k=20&c=Sa_kKKNWESz-wXPJPSOtKms8PqSyMiq8SfIH3h5d_4k='

const backgroundText1 = "Uniting Hearts,Everlasting Bonds,Soulful Connections ..";
const backgroundText2 = "Love Beyond Borders,Harmony in Hearts,Forever Together ..";
const AboutUs = () => {
    // const data = useLoaderData();
    // console.log('data: ', data);
    return (
        <div>
            {/* a banner section */}
            <div className="hero min-h-screen bg-no-repeat object-cover" style={{ backgroundImage: 'url(https://cdn-images-1.medium.com/max/1200/1*Rwfmjx0u-KS11H9-WHbEbQ.jpeg)'}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold font-serif">Empowering Connections, Building Futures</h1>
                        <p className="mb-5 font-semibold ">Discover a Platform Committed to Uniting Hearts and Creating Lasting Bonds. Our Mission is to Foster Love, Respect, and Compatibility in Every Relationship Journey</p>
                    </div>
                </div>
            </div>
            {/* founding story section */}
            <FreeBacgroundImage imgLink={image1Link} backgroudText={backgroundText1}></FreeBacgroundImage>
            <FoundingStory></FoundingStory>
            <FreeBacgroundImage imgLink={image2Link} backgroudText={backgroundText2}></FreeBacgroundImage>
            <TeamInformation ></TeamInformation>
        </div>
    );
};

export default AboutUs;