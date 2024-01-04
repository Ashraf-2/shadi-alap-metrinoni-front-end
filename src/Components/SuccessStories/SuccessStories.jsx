import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('fakeLoveStory.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStories(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <span className="loading loading-dots text-center"></span>
    }
    return (
        <div className="my-5">
            <h2 className="text-center text-4xl font-bold">Success Stories</h2>

            <Swiper
                className="bg-pink-100 mt-5"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >
                {
                   
                    stories.map(singleStory => <SwiperSlide key={singleStory.id}>
                        <div className="flex flex-col justify-center items-center px-14 py-10">
                            <img className="w-40 h-40 rounded-full" src={singleStory.imageURL} alt="" />
                            <div className="my-5 text-xl">
                                <p>{singleStory.story}</p>
                                <p className="text-right font-bold ">---{singleStory.userName}</p>
                                <p className="text-right font-normal ">{singleStory.occupation}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SuccessStories;