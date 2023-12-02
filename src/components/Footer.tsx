import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer:React.FC = () => {
    return(
        <div className="flex flex-col bottom-0">
            <div className="w-[80vw] border-[#9B8F84] border-[1px]"/>
            <div className="min-w-[80vw] flex flex-row justify-between text-[#9B8F84] h-[7.5vh] items-center">
                <div className="cursor-default">
                    Coffee Thoughts
                </div>
                <div className="flex flex-row gap-2">
                    <Link to="https://www.instagram.com/lawrence.tlee/">
                        <FaInstagram size={25}/>
                    </Link>
                    <Link to="https://github.com/lawtlee">
                        <FaGithub size={25}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer