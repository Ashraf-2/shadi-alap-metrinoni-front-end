import { SwiperSlide } from "swiper/react";

const SingleStoryShow = ({ singleStory }) => {
    console.log(singleStory)
    const { imageURL, story, occupation, userName } = singleStory;
    return (
        <div>
            <SwiperSlide>
                <img className="w-32 h-32 rounded-full" src={imageURL} alt="" />
                <div>
                    <p>{story}</p>
                </div>
            </SwiperSlide>
        </div>
    );
};

export default SingleStoryShow;