import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

interface props{
    setCategory: (value: string)=>void;
}

const CategorySort:React.FC<props> = (props: props) =>{
    const [clicked, setClick] = useState(false);
    const [category, setCategory] = useState("All");
    const [width, setWidth] = useState("pl-3 pr-3")
    const wrapperRef = useRef<HTMLDivElement>(null)

    const handleSelect = (value: string) => {
        setCategory(value)
        props.setCategory(value);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (
            clicked == true &&
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Element)
          ) {
            setClick(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside); // Bind the event listener
        return () => {
          document.removeEventListener('mousedown', handleClickOutside); // Unbind the event listener on clean up
        };
    }, [wrapperRef, clicked]);

    return (
        <div
            className={`gap-2 text-[#9B8F84] h-[40px] 
        items-center cursor-pointer
        border-[#9B8F84] md:flex hidden ${width}`}
         ref={wrapperRef}
        >
            <div
                className="flex justify-evenly w-full items-center gap-1 cursor-default hover:cursor-pointer"
                onClick={() => setClick(!clicked)}
            >
                <p className="text-black/50 text-[16px]">{category}</p>
                <div className="flex justify-center items-center">
                    <motion.img
                        src="/V.svg"
                        className="h-[10px] absolute"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: clicked ? 0 : 1 }}
                        transition={{ duration: 0.25 }}
                    />
                    <motion.img
                        src="/X.svg"
                        className=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: clicked ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                    />
                </div>
            </div>
            <motion.div
                className={`absolute translate-y-[4.5rem] pl-2 pr-2 border-2 border-[#9B8F84] rounded-xl ml-[-0.5rem] z-[10] bg-white text-[16px]`}
                initial={{ opacity: 0 }}
                animate={{ opacity: clicked ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            >
                <ul className="z-[1]">
                    <li
                        className="hover:cursor-pointer z-1 hover:text-[#547E88]"
                        onClick={() => {
                            handleSelect("All");
                            setClick(false);
                            setWidth("pl-3 pr-3")
                        }}
                    >
                        {" "}
                        All{" "}
                    </li>
                    <li
                        className="hover:cursor-pointer z-1 hover:text-[#547E88]"
                        onClick={() => {
                            handleSelect("Coffee Shops");
                            setClick(false);
                            setWidth("min-w-[125px]")
                        }}
                    >
                        {" "}
                        Coffee Shops{" "}
                    </li>
                    <li
                        className="hover:cursor-pointer hover:text-[#547E88]"
                        onClick={() => {
                            handleSelect("Deez");
                            setClick(false);
                            setWidth("pl-3 pr-3")
                        }}
                    >
                        Deez
                    </li>
                    <li
                        className="hover:cursor-pointer hover:text-[#547E88]"
                        onClick={() => {
                            handleSelect("CS Thoughts");
                            setClick(false);
                            setWidth("min-w-[125px]")
                        }}
                    >
                        CS Thoughts
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}

export default CategorySort