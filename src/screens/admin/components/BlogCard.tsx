import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaPencilAlt, FaExternalLinkAlt } from "react-icons/fa";
import "./BlogCard.scss"
import { retrieveImage } from "../../../utilities/utilities";
import { useEffect } from "react";

interface prop{
    blog: {
        title: string,
        date: {
            seconds: number,
            nanoseconds: number,
        },
        id: string,
        images: Array<string>,
        category: string
        description: string,
        bodyText: string
    },
    key: number
}

function BlogCard(props: prop): JSX.Element {
    const [imagePath, setPath] = useState("")
    const date = new Date((props.blog.date.seconds * 1000) + (props.blog.date.nanoseconds / 1000000))
    const navigate = useNavigate()

    const editLink = () =>{
        navigate(`/admin/editor/${props.blog.category}/${props.blog.id}`, 
        {state:{ 
            title: props.blog.title,
            description: props.blog.description,
            images: props.blog.images,
            category: props.blog.category,
            body: props.blog.bodyText,
        }})
    }
    
    const getImageUrl = async() =>{
        if (props.blog.images.length != 0)
            setPath(await retrieveImage(props.blog.images[0]))
    }

    useEffect(()=>{
        if (props.blog.images.length != 0 && imagePath == "")
            getImageUrl();
    },[])

    return(
        <div className="w-[80%] flex gap-5 h-[75px] items-center bg-white border-black border-2 font-RedHat text-[20px]">
            <div className="w-[15%] bg-[#D9D9D9] h-full flex justify-center items-center">
                <img src={imagePath} alt="Photo" className="object-contain w-[100%] h-[100%]"/>
            </div>
            <div className="flex items-center justify-evenly w-[85%]">
                <p className="w-[55%] text-ellipsis overflow-hidden whitespace-nowrap">{props.blog.title}</p>
                <p className="w-[35%]">
                    {date.getMonth() + 1}.{date.getDate()}.{date.getFullYear()}
                </p>
                <div className="flex justify-evenly items-center w-[10%]">
                    <div>
                        <FaExternalLinkAlt className="button"/>
                    </div>
                    <div onClick={()=>{editLink()}}>
                        <FaPencilAlt className="button"/>
                    </div>
                    <div>
                        <FaRegTrashAlt className="button"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard