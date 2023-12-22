import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();


    return (
        <div className="flex flex-col justify-center items-center text-[#9B8F84] z-[1]">
            <div className="min-w-[80vw] flex flex-row md:justify-evenly items-center h-[10vh] justify-between">
                <div className="sm:flex justify-evenly w-[20vw] hidden">
                    <p onClick={()=>navigate('/', {state:{land: true}})} className="hover:text-[#7B695A] hover:cursor-pointer">home</p>
                    <Link to="/blogs" className="hover:text-[#7B695A]">blogs</Link>
                </div>
                <div onClick={()=>navigate('/', {state:{land: true}})} 
                className="flex justify-evenly font-bold md:text-[40px] sm:text-[36px] text-[20px] cursor-default gap-2">
                    <p>COFFEE </p> <p>THOUGHTS</p>
                </div>
                <div className="sm:hidden">
                    <img
                        src={toggle ? "/close.svg" : "/menu.svg"}
                        alt= "Menu"
                        onClick={()=>setToggle(!toggle)}
                    />
                    <div
                        className={`${!toggle ? "hidden" : "flex"} p-6 
                    absolute right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl bg-white`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/blogs'>BLOGS</Link></li>
                            <li><Link to='/about'>ABOUT</Link></li>
                            <li><Link to='/contact'>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sm:flex justify-evenly w-[20vw] hidden">
                    <Link to="/about" className="hover:text-[#7B695A]">about</Link>
                    <Link to="/contact" className="hover:text-[#7B695A]">contact</Link>
                </div>
            </div>
            <div className="w-[80vw] border-[#9B8F84] border-[1px]"/>
        </div>

    );
}
export default Navbar