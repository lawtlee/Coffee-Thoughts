import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

interface props{
    images: string[];
    index?: number;
    show: boolean;
    onClose: () => void;
}

const ImagePopup:React.FC<props> = (props: props) => {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);


    const handleClose = () => {
        show;
        setShow(false);
        props.onClose();
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (
            props.show == true &&
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Element)
          ) {
            handleClose();
          }
        }
        document.addEventListener('mousedown', handleClickOutside); // Bind the event listener
        return () => {
          document.removeEventListener('mousedown', handleClickOutside); // Unbind the event listener on clean up
        };
    }, [wrapperRef, props.show]);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: true,
        autoplaySpeed: 2500,
        focusOnSelect: true,
        height: "400px",
    };
    return (
        <div className="fixed top-0 flex-col items-center justify-center h-[100vh] w-[100vw]">
            <div className="p-[50px] w-[100%] bg-black/50 h-[100%] flex flex-col justify-center">
                <div className="absolute top-10 right-10 w-[25px] h-[25px] cursor-pointer">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="#FFF"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[100%] h-[100%]"
                        onMouseEnter={()=>setHover(true)}
                        onMouseLeave={()=>setHover(false)}
                    >
                        <path
                            d="M10.4099 9L16.7099 2.71C16.8982 2.5217 17.004 2.2663 17.004 2C17.004 1.7337 16.8982 1.47831 16.7099 1.29C16.5216 1.1017 16.2662 0.995911 15.9999 0.995911C15.7336 0.995911 15.4782 1.1017 15.2899 1.29L8.99994 7.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L7.58994 9L1.28994 15.29C1.19621 15.383 1.12182 15.4936 1.07105 15.6154C1.02028 15.7373 0.994141 15.868 0.994141 16C0.994141 16.132 1.02028 16.2627 1.07105 16.3846C1.12182 16.5064 1.19621 16.617 1.28994 16.71C1.3829 16.8037 1.4935 16.8781 1.61536 16.9289C1.73722 16.9797 1.86793 17.0058 1.99994 17.0058C2.13195 17.0058 2.26266 16.9797 2.38452 16.9289C2.50638 16.8781 2.61698 16.8037 2.70994 16.71L8.99994 10.41L15.2899 16.71C15.3829 16.8037 15.4935 16.8781 15.6154 16.9289C15.7372 16.9797 15.8679 17.0058 15.9999 17.0058C16.132 17.0058 16.2627 16.9797 16.3845 16.9289C16.5064 16.8781 16.617 16.8037 16.7099 16.71C16.8037 16.617 16.8781 16.5064 16.9288 16.3846C16.9796 16.2627 17.0057 16.132 17.0057 16C17.0057 15.868 16.9796 15.7373 16.9288 15.6154C16.8781 15.4936 16.8037 15.383 16.7099 15.29L10.4099 9Z"
                            fill={hover ? "#FFFFFF" : "#000000"}
                        />
                    </svg>
                </div>
                <div ref={wrapperRef}>
                    <Slider {...settings}>
                        {props.images.map((image, index) => (
                            <div className="w-[400px] h-[500px]">
                                <img
                                    src={image}
                                    alt={`Image ${index}`}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ImagePopup;