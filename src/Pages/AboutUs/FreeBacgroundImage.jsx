import { TypeAnimation } from "react-type-animation";

const FreeBacgroundImage = ({ imgLink, backgroudText }) => {

    return (
        <div style={{ backgroundImage: `url(${imgLink})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="bg-fixed min-h-[60vh] md:min-h-[80vh] w-full mx-auto object-fill flex flex-col items-center justify-center">
            {/* <p className="text-center text-white text-4xl font-bold font-mono">{backgroudText}</p> */}
            <TypeAnimation
                sequence={[`${backgroudText}`, 1000, `${backgroudText}`, 3000, `${backgroudText}`, 3000]}
                className="text-3xl md:text-4xl text-center text-gray-200 font-bold"
                repeat={Infinity}
            />
        </div>
    );
};

export default FreeBacgroundImage;