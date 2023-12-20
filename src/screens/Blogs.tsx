import React, { useState, useEffect } from "react"
import { retrieveAllBlogs } from "../utilities/utilities";
import { sortByDate } from "../utilities/dataParsing";
import Preview from "../components/PostPreview";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Blogs:React.FC = () =>{
    const [blogs, setBlogs] = useState<any>([])
    const [load, setLoad] = useState(false);
    
    const sortByDateHelper = async(method: string) => {
        if (method === "Date: Newest"){
            const newBlogs = await sortByDate(blogs, false);
        } else if (method === "Date: Oldest"){
            const newBlogs = await sortByDate(blogs, true);
        }
    }

    const sortByCategoryHelper = async(method: string) => {

    }

    const searchFunctionHelper = async() =>{

    }

    const getBlogs = async()=>{
        const tempBlogs = await retrieveAllBlogs(false)
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

    useEffect(()=>{},[blogs])

    return (
        <div className="flex flex-col gap-10 bg-white min-h-screen items-center z-[0]">
            <Navbar />
            <SearchBar sortByCategory={sortByCategoryHelper} sortByDate={sortByDateHelper} searchFunction={searchFunctionHelper} blogs={blogs}/>
            <div className="flex flex-col gap-10 items-center">
                {blogs.length == 0 && !load ? (
                    <div className="md:text-[48px] font-RedHat flex flex-wrap flex-row text-[24px] max-w-[80vw]">
                        {/* <p> Unfortunately there aren't any posts</p> */}
                    </div>
                ) : (
                    <div className="min-h-[75vh] flex flex-col gap-10 items-center">
                        {blogs.map(
                            (
                                blog: {
                                    title: string;
                                    date: { seconds: number; nanoseconds: number };
                                    id: string;
                                    images: string[];
                                    category: string;
                                    description: string;
                                    bodyText: string;
                                },
                                key: number
                            ) => (
                                <Preview blog={blog} index={key} key={key} />
                            )
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Blogs;