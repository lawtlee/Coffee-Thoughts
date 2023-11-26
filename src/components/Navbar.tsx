import React from "react";

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="min-w-[80vw] flex flex-row justify-evenly items-center text-white h-[10vh]">
                <div className="flex justify-evenly w-[20vw]">
                    <p>home</p>
                    <p>blogs</p>
                </div>
                <div className="flex justify-evenly font-bold text-[40px]">
                    <p>COFFEE THOUGHTS</p>
                </div>
                <div className="flex justify-evenly w-[20vw]">
                    <p>about</p>
                    <p>contact</p>
                </div>
            </div>
            <div className="w-[80vw] border-white border-[1px]"/>
        </div>

    );
}
export default Navbar