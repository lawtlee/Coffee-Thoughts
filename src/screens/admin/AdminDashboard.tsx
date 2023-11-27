import React from "react";
import BlogCard from "./components/BlogCard";
import AdminNavbar from "./components/AdminNavbar";


const SampleBlogs = [
    {
        title: "Title",
        date: "11.26.23",
        photo: "",
    }
]

const Dashboard: React.FC = () => {
    return(
        <div className="flex-col justify-center w-screen items-center flex gap-10">
            <AdminNavbar/>
            {SampleBlogs.map((blog, key) => (<BlogCard title={blog.title} date={blog.date} image={blog.photo} id=""/>))}
        </div>
    )
}

export default Dashboard