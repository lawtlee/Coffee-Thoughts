import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { retireveAllTopic } from "../utilities/utilities";
import Preview from "../components/PostPreview";

const CoffeeShops: React.FC = () => {
    const [blogs, setBlogs] = useState<any>([])
    const [load, setLoad] = useState(false);

    const getBlogs = async() => {
        const newBlogs = await retireveAllTopic("coffee-shops", false);
        if (newBlogs.length >= 2){
            setBlogs([newBlogs[0], newBlogs[1]]);
        } else if (newBlogs.length == 1){
            setBlogs([newBlogs[0]])
        }
    }
    
    useEffect(()=>{
        if (!load){
            setLoad(true);
            getBlogs();
        }
    })

    return (
        <div className="min-h-screen flex flex-col items-center gap-10 bg-white">
            <Navbar />
            <div
                className={`flex flex-row flex-wrap w-[80vw] items-center justify-evenly h-fit pt-10 pb-10 gap-5`}
            >
                <img
                    src="/Lines.png"
                    alt="backgrop"
                    className="z-[0] absolute"
                />
                <div className="flex flex-row w-[80vw] items-center justify-evenly">
                    <img
                        src="/Rectangle.png"
                        alt="bg"
                        className="absolute z-[0] hidden lg:block"
                    />
                    <div className="z-[1] flex flex-row w-[80vw] items-center justify-evenly flex-wrap md:gap-0 gap-3">
                        <Link
                            to={`/coffee-shops`}
                            className="text-center text-[#547E88] bg-[#F6DEC9] 
                        w-[226px] h-[226px] flex flex-wrap items-center justify-center rounded-full
                        text-[32px] font-RedHat hover:text-[#FFF7ED]"
                        >
                            <p className="w-[80%]">Coffee Shops</p>
                        </Link>
                        <p className="font-RedHat xl:text-[26px] lg:w-[60%] md:text-[22px] text-[14px] text-[#547E88]">
                            Welcome to Coffee Shops where I review coffee shops that I visit. It is an extremely subjective
                            review so don't come at me if you like some cafe that I don't.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center">
                <div className="flex md:w-[75vw]">
                    <div className="flex justify-center items-center text-[#547E88]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="472"
                            height="85"
                            viewBox="0 0 472 85"
                            fill="none"
                            className="md:block hidden"
                        >
                            <path
                                d="M81.0095 76.9999C158.03 89.82 274.516 84.5303 355.533 76.9999C412.572 71.6982 459.033 82.4999 469.887 54.5065C475.872 39.0686 464.697 27.9999 433.121 18.6702C329.091 -12.0673 261.35 4.41235 145.797 4.41235C78.2325 4.41235 5.03258 4.41234 0.2242 40.6115C-2.94182 64.4464 27.5941 68.1088 81.0095 76.9999Z"
                                fill="#547E88"
                            />
                        </svg>
                        <div className="md:absolute flex gap-2 md:text-white">
                            <p className="font-semibold text-[28px]">RECENT</p>
                            <p className="font-semibold text-[28px]">POSTS</p>
                        </div>
                    </div>
                </div>
                
                {blogs.length == 0 ? 
                <div className="md:text-[48px] font-RedHat flex flex-wrap flex-row text-[24px] max-w-[80vw]">
                    <p> Unfortunately there aren't any posts</p>
                </div> : 
                <>
                   {blogs.map(
                    (
                        blog: {
                            title: string;
                            date: { seconds: number; nanoseconds: number };
                            id: string;
                            images: string[];
                            category: string;
                            description: string;
                            bodyText: string;
                        },
                        key: number
                    ) => (
                        <Preview blog={blog} index={key} key={key} />
                    )
                    )} 
                </>
                }
                
                
            </div>
            <Footer />
        </div>
    );
}

export default CoffeeShops;