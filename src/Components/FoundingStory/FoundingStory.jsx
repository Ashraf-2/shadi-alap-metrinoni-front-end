
const FoundingStory = () => {
    return (
        <div className="py-5 flex flex-col lg:flex-row items-center justify-between gap-2 mx-5">
            <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">

                <h2 className="text-4xl font-bold mb-4">Our Journey: From Vision to Reality</h2>
                <p className="text-gray-700 mb-4">
                    Founded with a passion for fostering meaningful connections, our matrimony platform started as a dream to revolutionize the way people find love. It all began when <strong>Mr.Arafat Kabir</strong>(founder) envisioned a space where individuals could embark on their relationship journeys with trust, transparency, and genuine compatibility.
                </p>
                <p className="text-gray-700 mb-4">
                    Driven by the belief that everyone deserves a chance at lifelong happiness, <strong>Mr.Arafat Kabir</strong> and the dedicated team worked tirelessly to bring this vision to life. From late-night brainstorming sessions to overcoming challenges, the journey has been marked by dedication, resilience, and a deep commitment to creating a platform that goes beyond traditional matchmaking.
                </p>
                <p className="text-gray-700">
                    Today, we stand proud of what we've accomplished together, and our founding story is a testament to the unwavering dedication to connecting hearts and building lasting relationships. Join us on this journey, where every story is unique, and every connection is meaningful.
                </p>
            </div>
            <div className="flex-1 lg:w-1/2 mx-auto h-full border-2">
                {/* <!-- Image or Illustration --> */}
                {/* <img src="founder_illustration.jpg" alt="Founder Illustration" className="w-full h-auto rounded-lg shadow-md"/>
                     */}
                <iframe className=" w-full mx-auto h-[340px] md:h-[360px] rounded-lg shadow-md" src="https://www.youtube.com/embed/1ZKTZehtsRQ?si=H41eKswQnX9MQJOK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

    );
};

export default FoundingStory;