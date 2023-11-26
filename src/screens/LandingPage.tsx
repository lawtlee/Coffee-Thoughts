import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

interface popup{
    setStatus: Dispatch<SetStateAction<boolean>>;
}

const coffeeCup = {
    show: {
        y: -40,
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
};

const shiftLeft = {
    show:{
        opacity: 1
    },
    move:{
        opacity: 0,
        x: -500
    }
};

const shiftRight = {
    show:{
        opacity: 1
    },
    move:{
        x: 500,
        opacity: 0,
    }
};

const LandingPage: React.FC<popup> = ({ setStatus }) =>{
    const [hover, setHover] = useState(false);
    const [animate, setAnimation] = useState(false);
    const [hide, setHide] = useState(false);

    const startAnimation = async() =>{
        setAnimation(true);
        await new Promise(() => {
            setTimeout(() => {
                setHide(true);
                setStatus(true);
            }, 1000);
        });
    }

    return (
        <div className="overflow-hidden h-fit">
            <motion.div 
                className="flex-col flex items-center justify-center min-h-[100vh] h-fit"
                initial="show"
                animate={animate ? "hidden" : "show"}
                variants={coffeeCup}
                transition={{ duration: 1 }}
            >
                <img src={"landing/CoffeeText.png"} alt={"Coffee Thoughts"}/>
                <motion.div 
                    className="flex justify-center items-center hover:cursor-pointer" 
                    onClick={()=>startAnimation()}
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    initial={{ y: -10 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="154" height="64" viewBox="0 0 154 64" fill="none">
                        <path d="M106.899 58.8924L107.728 58.7318C126.313 55.1307 148.166 59.126 153.09 43.2882C156.559 32.1295 149.545 24.7297 141.625 15.4039C120.551 -9.41057 84.6754 1.18342 50.4025 9.827C28.8283 15.268 -1.47572 14.5479 0.0558387 33.8504C1.33429 49.9629 21.0342 52.6928 38.4389 58.7318C63.2715 67.348 80.9551 63.9207 106.899 58.8924Z" 
                        fill={hover ? "#547E88" : "white"}
                    />
                    </svg>
                    <p className={`absolute ${hover ? "text-white" : "text-[#547E88]"} hover:cursor-pointer`}>enter site</p>
                </motion.div>
                <motion.img src={"landing/MitskiThots.png"} alt="Mitski in Coffee"
                    initial={{x: 30}}
                />
            </motion.div>
            <motion.div 
                className={`hidden xl:left-20 top-[200px] lg:block absolute left-2 ${hide ? "hidden" : "block"}`}
                variants={shiftLeft}
                initial="show"
                animate={animate ? "move" : "show"}
                transition={{ duration: 1 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="247" height="105" viewBox="0 0 247 105" fill="none">
                    <path d="M110.75 0.633141C94.6516 -1.96812 84.4204 3.6113 70.7292 14.3327C64.2488 19.4074 55.9847 31.6061 55.9847 31.6061C55.9847 31.6061 36.1492 26.4191 24.9162 31.6061C9.83679 38.5693 -1.52327 51.8577 0.166778 64.9616C2.16105 80.4244 11.2613 88.2018 24.9162 90.5739C34.6324 92.2617 49.1391 89.3826 49.1391 89.3826C49.1391 89.3826 64.7995 100.575 74.9418 102.487C87.5799 104.869 95.7252 105.258 110.223 104.869C123.748 104.506 141.292 92.3608 141.292 92.3608C141.292 92.3608 154.516 100.712 163.408 102.487C190.264 107.847 205.009 89.3826 205.009 89.3826C205.009 89.3826 227.453 86.8805 234.405 80.4545L234.631 80.2454C242.473 72.998 247 68.8144 247 57.2727C247 49.7727 240.703 41.5909 229.507 36.1364C219.707 31.3617 199.743 31.6061 199.743 31.6061C199.743 31.6061 192.897 17.8212 178.153 13.7371C160.249 8.7778 148.664 25.6498 148.664 25.6498C148.664 25.6498 132.866 4.20692 110.75 0.633141Z" fill="#F6DEC9"/>
                </svg>
            </motion.div>
            <motion.div 
                className="hidden lg:block absolute xl:right-20 top-[400px] right-10"
                variants={shiftRight}
                initial="show"
                animate={animate ? "move" : "show"}
                transition={{ duration: 1 }}    
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="247" height="105" viewBox="0 0 247 105" fill="none">
                    <path d="M110.75 0.633141C94.6516 -1.96812 84.4204 3.6113 70.7292 14.3327C64.2488 19.4074 55.9847 31.6061 55.9847 31.6061C55.9847 31.6061 36.1492 26.4191 24.9162 31.6061C9.83679 38.5693 -1.52327 51.8577 0.166778 64.9616C2.16105 80.4244 11.2613 88.2018 24.9162 90.5739C34.6324 92.2617 49.1391 89.3826 49.1391 89.3826C49.1391 89.3826 64.7995 100.575 74.9418 102.487C87.5799 104.869 95.7252 105.258 110.223 104.869C123.748 104.506 141.292 92.3608 141.292 92.3608C141.292 92.3608 154.516 100.712 163.408 102.487C190.264 107.847 205.009 89.3826 205.009 89.3826C205.009 89.3826 227.453 86.8805 234.405 80.4545L234.631 80.2454C242.473 72.998 247 68.8144 247 57.2727C247 49.7727 240.703 41.5909 229.507 36.1364C219.707 31.3617 199.743 31.6061 199.743 31.6061C199.743 31.6061 192.897 17.8212 178.153 13.7371C160.249 8.7778 148.664 25.6498 148.664 25.6498C148.664 25.6498 132.866 4.20692 110.75 0.633141Z" fill="#F6DEC9"/>
                </svg>
            </motion.div>
            <div className="overflow-hidden">
                <motion.div 
                    className={`absolute bottom-0 right-0 ${hide ? "hidden" : "block"}`}
                    variants={shiftRight}
                    initial="show"
                    animate={animate ? "move" : "show"}
                    transition={{ duration: 1 }}
                >
                    <img src='landing/Cloud2.png' alt="Clouds"/>
                </motion.div>
                <motion.div 
                    className="absolute bottom-0 left-0"
                    variants={shiftLeft}
                    initial="show"
                    animate={animate ? "move" : "show"}
                    transition={{ duration: 1 }}
                >
                    <img src="landing/Cloud1.png" alt="Clouds"/>
                </motion.div>
            </div>
        </div>
    )
}

export default LandingPage