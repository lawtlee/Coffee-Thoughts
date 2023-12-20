import React, { useState, useEffect, useRef,  } from "react";
import { motion } from "framer-motion";

interface filterProps{
    setFilter: (value: string)=>void;
}

const Filter:React.FC<filterProps> = (props: filterProps) => {
    const [filterClicked, setFClick] = useState(false);
    const [sort, setSort] = useState("Sort")
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleSort = (value: string) => {
        setSort(value);
        props.setFilter(value);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (
            filterClicked == true &&
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Element)
          ) {
            setFClick(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside); // Bind the event listener
        return () => {
          document.removeEventListener('mousedown', handleClickOutside); // Unbind the event listener on clean up
        };
    }, [wrapperRef, filterClicked]);

    return (
        <motion.div
            className="gap-2 text-[#9B8F84] h-[40px] 
                items-center justify-between border-2 cursor-pointer pl-2 pr-2
                border-[#9B8F84]  rounded-xl md:flex hidden"
            ref={wrapperRef}
        >
            <div
                className="flex gap-2 justify-center items-center"
                onClick={() => setFClick(!filterClicked)}
            >
                {sort}
                <div className="flex justify-center items-center">
                    <motion.img
                        src="/V.svg"
                        className="h-[10px] absolute"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: filterClicked ? 0 : 1 }}
                        transition={{ duration: 0.25 }}
                    />
                    <motion.img
                        src="/X.svg"
                        className=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: filterClicked ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                    />
                </div>
            </div>
            { filterClicked ? 
            <motion.div
                className={`absolute translate-y-[4rem] pl-2 pr-2 border-2 border-[#9B8F84] rounded-xl ml-[-0.5rem] z-[10] bg-white`}
                initial={{ opacity: 0 }}
                animate={{ opacity: filterClicked ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            >
                <ul className="z-[1]">
                    <li
                        className="hover:cursor-pointer z-1 hover:text-[#547E88]"
                        onClick={() => {
                            handleSort("Sort")
                            setFClick(false);
                        }}
                    >
                        {" "}
                        Clear Filters{" "}
                    </li>
                    <li
                        className="hover:cursor-pointer hover:text-[#547E88]"
                        onClick={() => {
                            handleSort("Date: Newest");
                            setFClick(false);
                        }}
                    >
                        Date: Newest
                    </li>
                    <li
                        className="hover:cursor-pointer hover:text-[#547E88]"
                        onClick={() => {
                            handleSort("Date: Oldest");
                            setFClick(false);
                        }}
                    >
                        Date: Oldest
                    </li>
                </ul>
            </motion.div> : <></>}
        </motion.div>
    );
}

export default Filter