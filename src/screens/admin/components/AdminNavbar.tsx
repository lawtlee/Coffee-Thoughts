import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center text-[white]">
            <div className="min-w-[80vw] flex flex-row justify-evenly items-center h-[10vh]">
                <div className="flex justify-evenly w-[20vw]">
                    <Link to="/" className="hover:text-[#7B695A]">home</Link>
                    <Link to="/blogs" className="hover:text-[#7B695A]">blogs</Link>
                </div>
                <div className="flex justify-evenly font-bold text-[40px]">
                    <Link to="/" className="flex gap-5 hover:text-[#7B695A]">
                        <p>COFFEE </p> <p>THOUGHTS</p>
                    </Link>
                </div>
                <div className="flex justify-evenly w-[20vw]">
                    <Link to="/about" className="hover:text-[#7B695A]">about</Link>
                    <Link to="/contact" className="hover:text-[#7B695A]">logout</Link>
                </div>
            </div>
            <div className="w-[80vw] border-[white] border-[1px]"/>
        </div>

    );
}
export default AdminNavbar