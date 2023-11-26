import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";
import Preview from "../components/PostPreview";

const test = [
    {
        title: "TITLE",
        description:"These are words I am typing to fill up space so we get a better sense of how it can be visualized.",
        image: "asdf",
        date: "11.26.23",
        link: "/"
    },
    {
        title: "TITLE",
        description:"These are words I am typing to fill up space so we get a better sense of how it can be visualized.",
        image: "asdf",
        date: "11.26.23",
        link: "/"
    }
]

const Home: React.FC = () => {
    const [status, setStatus] = useState(false)

    return(
        status ? 
        <motion.div 
            className="min-h-screen min-w-screen bg-white flex flex-col justify-center items-center gap-10 pb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Navbar/>

            <div className="h-[103px]"/>

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
            
            {/* <Preview/>
            <Preview/> */}
            {test.map((test, index) => (
                <Preview blog={test} index={index}/>
            ))}

        </motion.div> :
        <LandingPage setStatus={setStatus}/>
    )
}

export default Home;