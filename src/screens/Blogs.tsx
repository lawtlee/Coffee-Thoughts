import React, { useState, useEffect } from "react"
import { retrieveAllBlogs } from "../utilities/utilities";
import Preview from "../components/PostPreview";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs:React.FC = () =>{
    const [blogs, setBlogs] = useState<any>([])
    const [load, setLoad] = useState(false);
    
    const getBlogs = async()=>{
        const tempBlogs = await retrieveAllBlogs(false)
        if (tempBlogs.length >= 2){
            setBlogs([tempBlogs[0], tempBlogs[1]]);
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

    return (
        <div className="flex flex-col gap-10 bg-white min-h-screen items-center">
            <Navbar />
            <div>
                {blogs.length == 0 ? (
                    <div className="h-[75vh]"></div>
                ) : (
                    <div className="min-h-[75vh]">
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