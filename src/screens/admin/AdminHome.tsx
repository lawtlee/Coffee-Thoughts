import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TextField } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const fade = {
    hidden:{
        opacity: 0
    },
    show:{
        opacity: 1
    }
}

const AdminHome: React.FC = () => {
    const [animate, setAnimate] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key == "Enter" && animate)
            login();
    }

    useEffect(()=>{
        if (localStorage.getItem("uid") != undefined)
            navigate("dashboard")
        window.addEventListener("keydown", handleKeyPress);
    
        return () => window.removeEventListener("keydown", handleKeyPress);
    },[])

    const login = async() =>{
        if (email == ""){

        }
        if (password == ""){

        } 

        if (email == "" || password == "")
            return

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
            const user = userCredential.user;
            localStorage.setItem("uid", user.uid);
            navigate("dashboard");
            console.log(user);
        })
        .catch((error) => {
            console.log(error)
            setError(true);
        });
    }

    const startAnimation = async() => {
        setAnimate(true)
    }


    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <motion.div 
                className={``}
                variants={fade} 
                initial="show" 
                animate={animate ? {
                    y: -110 - (error ? 30 : 0),
                } : "show"} 
                transition={{duration: error ? 0 : 1}} 
            >
                <img src="/Coffee-Thoughts/admin/login/cloud.png" alt="clouds" />
                <div className="flex justify-center items-center text-center">
                    <p className="text-white text-[40px] tracking-[30px]">
                        COFFEE THOUGHTS
                    </p>
                </div>
            </motion.div>

            <motion.div className={`flex-col flex gap-5 w-[300px] h-[254px] justify-end items-center absolute`} 
                variants={fade} 
                initial="hidden" 
                animate={animate ? "show" : "hidden"} 
                transition={{ duration: 1, delay: .85}}
            >
                <TextField fullWidth label="email" id="fullWidth"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value);
                    }}
                    error={error}
                />
                <TextField fullWidth label="password" id="fullWidth" type="password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassowrd(event.target.value);
                    }}
                    error={error}
                    helperText={error ? "Incorrect email or password" : ""}
                />
            </motion.div>
            <motion.div
                className="w-[211px] h-[67px] text-center flex justify-center items-center border-2 bg-[#9B8F84]
                border-[#9B8F84] rounded-[51px] text-white hover:text-[#7B695A] hover:cursor-pointer"
                onClick={() =>{
                    if (!animate)
                        startAnimation()
                    else{
                        login()
                    }
                }}
                animate={animate ? {
                    y: 40,
                } : "show"} 
                transition={{duration: 1}} 
            >
                <p className="text-[20px]">LOGIN</p>
            </motion.div>

        </div>
    );
}

export default AdminHome