import React, { useState, useEffect } from "react"
import { searchForBlog } from "../utilities/utilities";
import { sortByDate, sortByCategory } from "../utilities/dataParsing";
import { CircularProgress } from "@mui/material";
import Preview from "../components/PostPreview";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Blog } from "../utilities/types";
import { useCustomFetch } from "../utilities/cache";

const Blogs:React.FC = () =>{
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [load, setLoad] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(false);
    const { fetchWithCache } = useCustomFetch()
    const [pageNumber, setPage] = useState(0);

    const sortByDateHelper = async(method: string) => {
        setBlogs(()=>[])
        if (method == "Date: Newest" || method == "Sort"){
            const newBlogs = sortByDate(blogs, false);
            setBlogs(()=>newBlogs);
        } else if (method == "Date: Oldest"){
            const newBlogs = sortByDate(blogs, true);
            setBlogs(()=>newBlogs);
        }
        setForceUpdate(() => true)
        await new Promise(() => {
            setTimeout(() => {
                setForceUpdate(false)
            }, 1000);
        });
    }

    const sortByCategoryHelper = async(method: string) => {
        setBlogs(()=>[]);
        if (method == "Coffee Thoughts"){
            const newBlogs = sortByCategory(blogs , "coffee-shops");
            setBlogs(()=>newBlogs);
        } else if (method == "Deez"){
            const newBlogs = sortByCategory(blogs, "deez");
            setBlogs(()=>newBlogs);
        } else if (method == "CS Thoughts"){
            const newBlogs = sortByCategory(blogs, "cs");
            setBlogs(()=>newBlogs);
        } else if (method == "All"){
            // TODO Add caching
            const tempBlogs = await fetchWithCache(pageNumber)
            setBlogs(()=>tempBlogs)
        }
        setForceUpdate(() => true)
        await new Promise(() => {
            setTimeout(() => {
                setForceUpdate(false)
            }, 1000);
        });
    }

    const searchFunctionHelper = async(query: string) =>{
        const newBlogs = await searchForBlog(query);
        setBlogs(()=>[])
        setBlogs(()=>newBlogs)
        setForceUpdate(() => true)
        await new Promise(() => {
            setTimeout(() => {
                setForceUpdate(false)
            }, 1000);
        });
    }

    const getBlogs = async()=>{
        const tempBlogs = await fetchWithCache(pageNumber)
        if (tempBlogs.length >= 2){
            setBlogs(tempBlogs);
        } else if (tempBlogs.length == 1){
            setBlogs([tempBlogs[0]])
        }
    }

    useEffect(()=>{
        if (!load){
            setLoad(true)
            getBlogs();
        }
    },[])

    // console.log({length: blogs.length, load: load})

    useEffect(()=>{

    },[forceUpdate])

    return (
        <div className="flex flex-col gap-10 bg-white min-h-screen items-center z-[0]">
            <Navbar />
            <SearchBar sortByCategory={sortByCategoryHelper} sortByDate={sortByDateHelper} searchFunction={searchFunctionHelper} blogs={blogs}/>
            <div className="flex flex-col gap-10 items-center">
                {blogs.length == 0 && load ? (
                    <div className="md:text-[48px] font-RedHat flex flex-wrap flex-row text-[24px] 
                    max-w-[70vw] h-[50vh]  justify-center text-center text-[#547E88]">
                        <p> Unfortunately there aren't any posts</p>
                    </div>
                ) : (<>
                        <div className={`min-h-[75vh] flex-col gap-10 items-center ${forceUpdate ? "hidden" : "flex" }`}>
                            {blogs.map(
                                (
                                    Blog,
                                    key: number
                                ) => (
                                    <Preview blog={Blog} index={key} key={key} />
                                )
                            )}
                        </div>
                        <div className={`${forceUpdate ? "flex" : "hidden"} flex-col justify-center items-center w-full h-[60vh]`}>
                            <CircularProgress sx={{color: "#9B8F84"}}/>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Blogs;