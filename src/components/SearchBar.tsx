import React, { useState, useEffect, useRef } from "react";
import { Input, } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { autoFill } from "../utilities/dataParsing";
import Filter from "./Filter";
import CategorySort from "./CategoryFilter";
import { Blog } from "../utilities/types";


interface props{
    sortByDate: (method: string) => Promise<any>;
    sortByCategory: (method: string) => Promise<any>;
    searchFunction: (query: string) => Promise<any>;
    blogs: Array<Blog>;
}

const SearchBar: React.FC<props> = (props: props) => {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("Sort");
    const [searchResults, setResult] = useState<string[]>([])
    const [debounce, setDebounce] = useState(false)
    const [focus, setFocus] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null)

    const handleEnter = () => {
        props.searchFunction(query)
    };

    const handleSort = (value: string) =>{
        setSort(value)
        props.sortByDate(value);
    }

    const handleFilter = (value: string) => {
        setFilter(value)
        props.sortByCategory(value);
    }

    const handleTextInput = async(value: string) => {
        setQuery(value)
        if (!debounce){
            setDebounce(true);
            const result = await autoFill(props.blogs, value)
            await new Promise(() => {
                setTimeout(() => {
                    setResult(result);
                    setDebounce(false);
                }, 500);
            });
        }
    }

    useEffect(()=>{

    },[filter, sort, searchResults, props.blogs])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (
            focus == true &&
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Element)
          ) {
            setFocus(false);
            setResult([]);
          }
        }
        document.addEventListener('mousedown', handleClickOutside); // Bind the event listener
        return () => {
          document.removeEventListener('mousedown', handleClickOutside); // Unbind the event listener on clean up
        };
    }, [wrapperRef, focus]);


    return (
        <div className="w-[80vw] h-[40px] flex gap-2 items-center justify-center">
            <div className="rounded-[20px] border-2 border-[#9B8F84] h-[40px] flex items-center min-w-[80%] md:pl-0 pl-2">
                <CategorySort setCategory={handleFilter}/>
                <div className="flex justify-between flex-row items-center w-full pr-2 md:border-l-[2px] border-[#9B8F84] h-full relative"
                    ref={wrapperRef}
                >
                    <Input
                        disableUnderline={true}
                        sx={{
                            border: "white",
                            background: "white",
                            paddingLeft: "5px",
                            fontFamily: "Reem Kufi",
                            width: "100%",
                            color: "#9B8F84",
                        }}
                        value={query}
                        margin="dense"
                        placeholder="Search for blogs..."
                        onChange={(e)=>handleTextInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") handleEnter();
                        }}
                        onFocus={()=>{
                            setFocus(true) 
                            handleTextInput(query)
                        }}
                    />
                    <div
                        onClick={()=>{}}
                    >
                        <FaSearch
                            style={{ color: "#9B8F84" }}
                            className="hover:cursor-pointer"
                        />
                    </div>
                    { searchResults.length != 0 ? 
                        <ul className="absolute text-[#9B8F84] z-[100] bg-white top-[2.35em]
                                border-l-2 border-r-2 border-[#9B8F84] rounded-bl-md md:w-[80%] rounded-br-md ml-[-2px]">
                            {searchResults.map((result, index) => (
                                <li className="pl-2 pr-2 w-full border-b-2 border-[#9B8F84] hover:cursor-pointer hover:text-[#547E88]"
                                    onClick={()=>{
                                        setResult([])
                                        setQuery(result)
                                        handleEnter();
                                    }}
                                    key={index}
                                >
                                    <p className=" text-ellipsis">
                                        {result}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    // </div>
                    : <></>}
                </div>
            </div>
            <Filter setFilter={handleSort} />
        </div>
    );
};

export default SearchBar;
