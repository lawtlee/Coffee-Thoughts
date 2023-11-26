import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center top-0 absolute text-[#9B8F84]">
            <div className="min-w-[80vw] flex flex-row justify-evenly items-center h-[10vh]">
                <div className="flex justify-evenly w-[20vw]">
                    <Link to="/" className="hover:text-[#7B695A]">home</Link>
                    <Link to="/blogs" className="hover:text-[#7B695A]">blogs</Link>
                </div>
                <div className="flex justify-evenly font-bold text-[40px]">
                    <Link to="/" className="flex gap-5">
                        <p>COFFEE </p> <p>THOUGHTS</p>
                    </Link>
                </div>
                <div className="flex justify-evenly w-[20vw]">
                    <Link to="/about" className="hover:text-[#7B695A]">about</Link>
                    <Link to="/contact" className="hover:text-[#7B695A]">contact</Link>
                </div>
            </div>
            <div className="w-[80vw] border-[#9B8F84] border-[1px]"/>
        </div>

    );
}
export default Navbar