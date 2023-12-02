import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import AdminNavbar from "./components/AdminNavbar";
import HelperBar from "./components/SearchBar";
import { retrieveAllBlogs } from "../../utilities/utilities";

const Dashboard: React.FC = () => {
    const [blogs, setBlogs] = useState<any[]>([])
    const [refresh, setRefresh] = useState(false)
    const apiCalls = async() => {
        const newBlogs = await retrieveAllBlogs(false)
        setBlogs(newBlogs)
    }

    // console.log(blogs)

    useEffect(()=>{
        if (!refresh){
            apiCalls();
            setRefresh(true);
        }
    },[refresh])

    // useEffect(()=>{
    //     console.log(blogs)
    //     if (blogs.length != 0){
    //         console.log("here")
    //         setDisplay(display)
    //     }
    // },[blogs])

    return(
        <div className="flex-col justify-center w-screen items-center flex gap-10">
            <AdminNavbar/>
            <HelperBar/>
            {blogs.map((blog, key) => <BlogCard key={key} blog={blog}/>)}
        </div>
    )
}

export default Dashboard