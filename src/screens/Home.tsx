import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";
import Preview from "../components/PostPreview";
import CircleLink from "../components/CircleLink";

const test = [
    {
        title: "TITLE",
        description:"These are words I am typing to fill up space so we get a better sense of how it can be visualized.",
        image: "asdf",
        date: "11.26.23",
        link: ""
    },
    {
        title: "TITLE",
        description:"These are words I am typing to fill up space so we get a better sense of how it can be visualized.",
        image: "asdf",
        date: "11.26.23",
        link: ""
    }
]

const Home: React.FC = () => {
    const [status, setStatus] = useState(false)

    return(
        status ? 
        <motion.div 
            className="min-h-screen min-w-screen bg-white flex flex-col items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Navbar/>

            {/* Second Part of the Home Page */}
            <div className="flex flex-col gap-10 items-center">
                <div className="flex w-[75vw]">
                    <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="472" height="85" viewBox="0 0 472 85" fill="none">
                            <path d="M81.0095 76.9999C158.03 89.82 274.516 84.5303 355.533 76.9999C412.572 71.6982 459.033 82.4999 469.887 54.5065C475.872 39.0686 464.697 27.9999 433.121 18.6702C329.091 -12.0673 261.35 4.41235 145.797 4.41235C78.2325 4.41235 5.03258 4.41234 0.2242 40.6115C-2.94182 64.4464 27.5941 68.1088 81.0095 76.9999Z" fill="#547E88"/>
                        </svg>
                        <div className="absolute flex gap-2">
                            <p className="font-semibold text-[28px] text-white">RECENT</p> 
                            <p className="font-semibold text-[28px] text-white">POSTS</p>
                        </div>
                    </div>
                </div>
                {test.map((test, index) => (
                    <Preview blog={test} index={index}/>
                ))}
                
            </div>
            <div className="relative w-full">
                <motion.div className="absolute bottom-0 right-0 z-0" initial={{scale: 1}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="561" height="538" viewBox="0 0 561 538" fill="none">
                        <path d="M417.715 22.6488C475.431 -9.46067 560.715 3.64887 560.715 3.64887V537.149H116.715C116.715 537.149 18.1079 457.359 4.71533 402.149C-11.1172 336.881 27.6324 293.188 46.2154 228.649C69.037 149.39 122.215 106.617 185.215 98.6488C227.77 93.2663 277.56 110.738 318.715 98.6488C363.764 85.4164 376.686 45.4749 417.715 22.6488Z" fill="#547E88" stroke="#547E88"/>
                    </svg>    
                </motion.div>
            </div>
            <div className="bg-coffee h-full w-full flex flex-col items-center mt-[-2.5rem] gap-10 pb-10">
                <div className="font-bold text-[48px] text-grey w-[80vw] flex gap-5 pt-10">
                    <p>MORE</p>  
                    <p>COFFEE</p>
                    <p>THOUGHTS</p>
                </div>
                <div className={`flex flex-row flex-wrap justify-center items-center`}>
                    <img src="home/categoryBG.png" className=""/>
                    <div className="flex absolute justify-evenly w-[75%] flex-wrap">
                        <CircleLink link="" title="Coffee Shop"/>
                        <CircleLink link="" title="DEEZ"/>
                        <CircleLink link="" title="CS"/>
                    </div>
                </div>
            </div>
        </motion.div> :
        <LandingPage setStatus={setStatus}/>
    )
}

export default Home;