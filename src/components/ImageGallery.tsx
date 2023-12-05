import React from "react";
import Slider from "react-slick";

interface props{
    images: string[];
}

const PhotoGallery:React.FC<props> = (props) =>{
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

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-[40px] w-[80vw] inline-block">
                
					{props.images.length == 0 ? <></> :
						<Slider {...settings}>
							{props.images.map((image, index) => (
								<div className="w-[200px] h-[200px]">
									<img
										src={image}
										alt={`Image ${index}`}
										className=" object-contain h-[100%] w-[100%]"
									/>
								</div>
							))}
						</Slider>
					}
                
            </div>
        </div>
    );
}

export default PhotoGallery