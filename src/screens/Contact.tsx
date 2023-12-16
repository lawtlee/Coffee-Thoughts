import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Contact:React.FC = () => {
    return(
        <div className="flex-col flex items-center min-h-screen gap-10 justify-between bg-white">
            <Navbar />
            <img
                src="/Lines.png"
                alt="backgrop"
                className="z-[0] absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-row w-[80vw] items-center justify-evenly">
                    <img
                        src="/BigRect.png"
                        alt="bg"
                        className="absolute z-[0] hidden lg:block opacity-90"
                    />
                    <div className="flex flex-row w-[80vw] items-center justify-evenly z-[1] flex-wrap gap-5">
                        <Link
                            to={`/contact`}
                            className="text-center text-[#547E88] bg-[#F6DEC9] 
                            lg:w-[226px] lg:h-[226px] flex flex-wrap items-center justify-center rounded-full
                            text-[32px] font-RedHat hover:text-[#FFF7ED] w-[300px] h-[100px]"
                        >
                            <p className="w-[80%]">CONTACT</p>
                        </Link>
                        <p className="font-RedHat xl:text-[30px] lg:w-[60%] md:text-[24px] text-[14px] text-[#547E88] text-center md:text-left">
                            You can find my socials in the footer of the webpage. If you want to contact me with an inquiry
                            send an email to <span className="hover:text-[#DDB998]">
                                <a href="mailto:lawsac2947@gmail.com">lawsac2947@gmail.com</a></span>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact