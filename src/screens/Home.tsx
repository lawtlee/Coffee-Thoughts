import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";
import Preview from "../components/PostPreview";
import CircleLink from "../components/CircleLink";
import { retrieveAllBlogs } from "../utilities/utilities";
import Footer from "../components/Footer";

// title: string,
// date: {
//     seconds: number,
//     nanoseconds: number,
// },
// id: string,
// images: Array<string>,
// category: string
// description: string,
// bodyText: string

const test = [
    {
        title: "TITLE",
        description:"These are words I am typing to fill up space so we get a better sense of how it can be visualized.",
        image: "asdf",
        date: {
            seconds: 1701422701,
            nanoseconds: 0
        },
        id: "asdf",
        images: [],
        category: "deez",
        bodyText: "lolol"
    },
    {
        title: "TITLE",
        description:"These are words I am typing to fill up space so we get a better sense of how it can be visualized.",
        image: "asdf",
        date: {
            seconds: 1701422701,
            nanoseconds: 0
        },
        id: "asdf",
        images: [],
        category: "deez",
        bodyText: "lolol"
    },
]

const Home: React.FC = () => {
    const [status, setStatus] = useState(false);
    const [blogs, setBlogs] = useState<any[]>([]);
    const [load, setLoad] = useState(false);
    const location  = useLocation();

    const getBlogs = async() => {
        const newBlogs = await retrieveAllBlogs(false);
        if (newBlogs.length >= 2){
            setBlogs([newBlogs[0], newBlogs[1]]);
        } else if (newBlogs.length == 1){
            setBlogs([newBlogs[0]]);
        }
    }

    useEffect(()=>{
        if (location.state != undefined && location.state.land != undefined){
            setStatus(true);
        }
        if (!load){
            setLoad(true)
            getBlogs();
        }
    })

    return(
        <>
            <motion.div 
                className={`min-h-screen min-w-screen bg-white flex-col items-center gap-10 ${status ? "flex" : "hidden"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: status ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <Navbar/>

                {/* Second Part of the Home Page */}
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex w-[75vw]">
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
                                <p className="font-semibold text-[28px]">
                                    RECENT
                                </p>
                                <p className="font-semibold text-[28px]">
                                    POSTS
                                </p>
                            </div>
                        </div>
                    </div>
                    {blogs.length == 0 ? 
                        <>
                            {test.map((test, key) => (
                                <Preview blog={test} index={key} key={key}/>
                            ))} 
                        </> : 
                        <>
                            {blogs.map((blog, key) => (
                                <Preview blog={blog} index={key} key={key}/>
                            ))}
                        </>
                    }
                    
                </div>
                <div className={`relative w-full ${blogs.length < 2 ? "hidden" : ""}`}>
                    <motion.div className="absolute bottom-0 right-0 z-0 xl:block hidden" initial={{scale: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="561" height="538" viewBox="0 0 561 538" fill="none">
                            <path d="M417.715 22.6488C475.431 -9.46067 560.715 3.64887 560.715 3.64887V537.149H116.715C116.715 537.149 18.1079 457.359 4.71533 402.149C-11.1172 336.881 27.6324 293.188 46.2154 228.649C69.037 149.39 122.215 106.617 185.215 98.6488C227.77 93.2663 277.56 110.738 318.715 98.6488C363.764 85.4164 376.686 45.4749 417.715 22.6488Z" fill="#547E88" stroke="#547E88"/>
                        </svg>    
                    </motion.div>
                </div>
                
                {/* THIRD PART OF THE PAGE */}
                <div className="bg-coffee w-full flex flex-col items-center gap-10 pb-10">
                    <div className="font-bold text-[48px] text-grey md:w-[80vw] flex gap-5 pt-10 text-center w-full">
                        <p>MORE COFFEE THOUGHTS </p>
                    </div>
                    <div className={`flex flex-row flex-wrap justify-center items-center`}>
                        <img src="home/categoryBG.png" className="md:block hidden"/>
                        <div className="flex md:absolute justify-evenly w-full xl:w-[75%] 
                            flex-wrap max-w-[1080px] md:gap-0 gap-5"
                        >
                            <CircleLink link="coffee-shops" title="Coffee Shops"/>
                            <CircleLink link="deez" title="DEEZ"/>
                            <CircleLink link="cs" title="CS"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </motion.div>
            <LandingPage setStatus={setStatus} status={status}/>
        </>
    )
}

export default Home;