import "react-responsive-carousel/lib/styles/carousel.min.css";
    
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
    return (

        <Carousel showArrows={true}>
            <div>
                <img src="https://i.ibb.co/MBcVw3X/eugenivy-now-1-Bs2s-Z9f-D2-Q-unsplash.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/kc4Xh0d/couple-4615557-1280.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/M2Nk98Y/drew-coffman-ll-Wjwo200fo-unsplash.jpg" />
            </div>
           
            
        </Carousel>

    );
};

export default Banner;