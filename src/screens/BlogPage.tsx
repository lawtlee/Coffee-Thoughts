import React, { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { fetchBlogs, retrieveAllImages } from "../utilities/utilities";
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

    const getBlogs = async() => {
        setFetch(true);
        const blog = await fetchBlogs(category, id)
        setBody(blog.bodyText)
        setTitle(blog.title)
        setImages(await retrieveAllImages(blog.images))
        const formatDate = new Date((blog.date.seconds * 1000) + (blog.date.nanoseconds / 1000000))
        setDate(`${formatDate.getMonth() + 1}.${formatDate.getDate()}.${formatDate.getFullYear()}`)
        if ((blog.bodyText.split(/\r\n|\r|\n/).length < 7 && images.length != 0) || 
            (images.length == 0 && blog.bodyText.split(/\r\n|\r|\n/).length < 11)) {
            setAbsolute("md:absolute");
        }
    }

    const setValues = async() =>{
        setTitle(location.state.title);
        setBody(location.state.body);
        setImages(await retrieveAllImages(location.state.images));
        const retrieveDate = location.state.date;
        const formatDate = new Date(
            retrieveDate.seconds * 1000 + retrieveDate.nanoseconds / 1000000
        );
        setDate(
            `${
                formatDate.getMonth() + 1
            }.${formatDate.getDate()}.${formatDate.getFullYear()}`
        );
        if (location.state.body.split(/\r\n|\r|\n/).length < 5) {
            setAbsolute("md:absolute");
        }
    }

    useEffect(()=>{
        if (location.state && title == "") {
            setValues()
        } else if (!fetch){
            getBlogs();
        }
    },[])

    useEffect(()=>{

    },[images])

    return(
        <div className="flex flex-col gap-10 items-center bg-[#FFF7ED] min-h-screen relative">
            <Navbar/>
            <div className="flex flex-col text-left gap-5 w-[80vw] text-[#547E88]">
                <div>
                    <p className="md:text-[16px] text-[12px] font-NovoMono">{date}</p>
                    <p className="md:text-[48px] text-[24px] text-wrap">{title.toUpperCase()}</p>
                </div>
                <p className="whitespace-pre-line md:text-[20px] text-[12px] font-NovoMono">{body}</p>
            </div>
            <div className="block mb-10">
                <PhotoGallery images={images}/>
            </div>
            <div className={`bottom-0 ${absolute}`}>
                <Footer/>
            </div>
        </div>
    )
}

export default BlogPage