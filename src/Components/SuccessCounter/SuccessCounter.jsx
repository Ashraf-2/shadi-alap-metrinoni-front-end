import CountUp from 'react-countup';


const SuccessCounter = () => {
    return (
        <div className="my-10">
            <h2 className="text-center font-bold text-4xl">This is success counter section</h2>
            <div className='flex flex-col md:flex-row justify-between items-center px-10 mt-10'>
                <div className='flex flex-col justify-center items-center '>
                    <CountUp className='text-2xl font-normal' end={124200} duration={2.75} />
                    <h3 className='text-3xl font-medium '>Users</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <CountUp className='text-2xl font-normal' end={62300} duration={2.75}/>
                    <h3 className='text-3xl font-medium '>Male Users</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <CountUp className='text-2xl font-normal' end={61900} duration={2.75}/>
                    <h3 className='text-3xl font-medium '>Female Users</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <CountUp className='text-2xl font-normal' end={20900} duration={2.75}/>
                    <h3 className='text-3xl font-medium '>Success Marriage</h3>
                </div>
            </div>
        </div>
    );
};

export default SuccessCounter;