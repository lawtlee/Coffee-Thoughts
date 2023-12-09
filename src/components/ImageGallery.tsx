import React, { useState } from "react";
import Slider from "react-slick";
import ImagePopup from "./CenteredImages";

interface props{
    images: string[];
}

const PhotoGallery:React.FC<props> = (props) =>{
    const [focus, setFocus] = useState(false);
    
    const settings = {
        // className: 'center',
        infinite: true,
        slidesToShow: (props.images.length >= 3 ? 3 : 1),
        speed: 500,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2500,
        // variableWidth: true,
        focusOnSelect: true,
        height: "400px",
        // centerPadding: '200px'
    };

    const handleClose = () => {
        setFocus(false)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-[40px] w-[80vw] inline-block hover:cursor-pointer"
                onClick={()=>setFocus(true)}
            >
                <Slider {...settings}>
                    {props.images.map((image, index) => (
                        <div className="w-[300px] h-[250px]">
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className=" object-contain h-[100%] w-[100%]"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            {focus ? 
                <ImagePopup images={props.images} show={focus} onClose={handleClose}/> : <></>
            }
        </div>
    );
}

export default PhotoGallery