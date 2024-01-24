import './WebsiteWorks.css';

const WebsiteWorks = () => {
    return (
        <div className="website_works bg-fixed mt-10 ">
            <h2 className="text-center font-medium text-3xl text-white pt-5">How Our Website works</h2>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10 w-11/12 mx-auto py-14 text-white'>
                <img className='rounded-lg hover:scale-110 ease duration-200' src="https://i.ibb.co/PxXjSGX/young-woman-looking-love-online-260nw-2247292153.jpg" alt="" />
                <div className='order-first md:order-last hover:scale-105 ease duration-200'>
                    <p className='text-xl'> <span className='italic text-2xl'>Shadi-alap</span> is an online matrimony web application.We care about our users. We protect their data and keep secret it.Here is the description of how our webiste works: </p>
                    <ul className='list-item list-disc ml-10'>
                        <li>User must register to get our service.</li>
                        <li>We use ML Algorithms to find the perfect match for the user.</li>
                        <li>Provide 1v1 chatting and video call features</li>
                        <li>Adultriness is strictly prohibited in our webiste</li>
                        <li>Take user feedback consciously</li>
                        <li>Country and location based user matching</li>
                        <li>24/7 hours customer service</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WebsiteWorks;