import React, { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { fetchBlogs } from "../utilities/utilities";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import PhotoGallery from "../components/ImageGallery";

const BlogPage: React.FC = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [images, setImages] = useState(Array<string>)
    const [date, setDate] = useState("")
    const [absolute, setAbsolute] = useState("")
    const [fetch, setFetch] = useState(false)

    const location = useLocation();
    const { category, id } = useParams();
    console.log(images)

    const getBlogs = async() => {
        setFetch(true);
        const blog = await fetchBlogs(category, id)
        setBody(blog.bodyText)
        setTitle(blog.title)
        setImages(blog.images)
        const formatDate = new Date((blog.date.seconds * 1000) + (blog.date.nanoseconds / 1000000))
        setDate(`${formatDate.getMonth() + 1}.${formatDate.getDate()}.${formatDate.getFullYear()}`)
        if (blog.bodyText.split(/\r\n|\r|\n/).length < 11) {
            setAbsolute("md:absolute");
        }
    }

    useEffect(()=>{
        if (location.state) {
            setTitle(location.state.title);
            setBody(location.state.body);
            setImages(location.state.images);
            const retrieveDate = location.state.date
            const formatDate = new Date((retrieveDate.seconds * 1000) + (retrieveDate.nanoseconds / 1000000))
            setDate(`${formatDate.getMonth() + 1}.${formatDate.getDate()}.${formatDate.getFullYear()}`)
            if (location.state.body.split(/\r\n|\r|\n/).length < 11){
                setAbsolute("md:absolute")
            }
        } else if (!fetch){
            getBlogs();
        }
    },[])

    return(
        <div className="flex flex-col gap-10 items-center w-screen bg-[#FFF7ED] min-h-screen">
            <Navbar/>
            <div className="flex flex-col text-left gap-5 w-[80vw] text-[#547E88]">
                <div>
                    <p className="text-[16px] font-NovoMono">{date}</p>
                    <p className="text-[48px]">{title.toUpperCase()}</p>
                </div>
                <p className="whitespace-pre-line text-[20px] font-NovoMono">{body}</p>
            </div>
            <PhotoGallery/>
            <div className={`bottom-0 ${absolute}`}>
                <Footer/>
            </div>
        </div>
    )
}

export default BlogPage