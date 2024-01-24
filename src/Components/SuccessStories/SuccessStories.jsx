import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useSeccessStory from "../../Hooks/useSeccessStory";
import Rating from "react-rating";


const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [successStories, isLoadingSuccessStories, refetch] = useSeccessStory()
    console.log(successStories);
    console.log({ isLoadingSuccessStories });

    const calculateMarriageDate = (date) => {
        // console.log(dob)
        const today = new Date();
        const DateOfMarraige = new Date(date);
        let differeceOfYear = today.getFullYear() - DateOfMarraige.getFullYear();

        let marriageMonth = today.getMonth() - DateOfMarraige.getMonth();
        // console.log(marriageMonth);
        if (marriageMonth < 0 || (marriageMonth === 0 && today.getDate() < DateOfMarraige.getDate())) {
            differeceOfYear--;
        }
        // console.log('age: ', age);
        // console.log(differeceOfYear);
        return differeceOfYear;
    }

    const sortByMarriageDate = (data) => {
        return data.sort((a, b) => calculateMarriageDate(a.marriageDate) - calculateMarriageDate(b.marriageDate))
    }
    const sortedMarraigeData = sortByMarriageDate(successStories);
    console.log(sortedMarraigeData)
    if (isLoadingSuccessStories) {
        return <span className="loading loading-dots"></span>
    }
    // useEffect(() => {
    //     fetch('fakeLoveStory.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             const sortedStories = sortByMarriageDate(data)
    //             setStories(sortedStories)
    //             setIsLoading(false)
    //         })
    // }, [])

    // if (isLoading) {
    //     return <span className="loading loading-dots text-center"></span>
    // }
    return (
        <div className="my-5">
            <h2 className="text-center text-4xl font-bold font-serif">Success Stories</h2>

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
                    sortedMarraigeData.map(singleStory => <SwiperSlide key={singleStory.id}>
                        <div className="flex flex-col justify-center items-center px-14 py-10">
                            <div className="flex justify-center flex-col items-center">
                                <img className="w-40 h-40 rounded-full" src={singleStory.coupleImageLink} alt="" />
                                <p className="text-center text-xl mt-2">Got Married: {singleStory.marriageDate}</p>
                            </div>
                            <div className="my-4 text-xl">
                                <div className="text-center my-1">

                                    <Rating
                                        initialRating={singleStory.rating}
                                        readonly
                                    />
                                </div>
                                <p>{singleStory.successStory}</p>
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