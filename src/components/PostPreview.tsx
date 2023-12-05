import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { retrieveImage } from "../utilities/utilities"

interface props{
    blog:{
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
    index: number,
    key: any,
}

function Preview(props: props): JSX.Element {
    const [index, setIndex] = useState(0)
    const [imagePath, setPath] = useState("")
    const date = new Date((props.blog.date.seconds * 1000) + (props.blog.date.nanoseconds / 1000000))

    const navigate = useNavigate();

    const blogPage = () =>{
        navigate(`/${props.blog.category}/${props.blog.id}`,
        {state:{
            title: props.blog.title,
            images: props.blog.images,
            body: props.blog.bodyText,
            date: props.blog.date,
        }})
    }

    const getImageUrl = async() => {
        if (props.blog.images.length != 0)
            setPath(await retrieveImage(props.blog.images[0]))
    }
    
    useEffect(()=>{
        if (props.index) setIndex(props.index)
        if (props.blog.images.length != 0 && imagePath == "")
            getImageUrl();
    },[])

    return(
        <div className={`flex w-[75vw] ${(index % 2 == 0) ? "flex-row" : "flex-row-reverse"} flex-wrap justify-between z-[1] gap-2`}>
            <div className={`md:w-[45%] md:h-[301px] h-[20vh] w-full flex justify-center items-center hover:cursor-pointer`}>
                <img src={imagePath} alt="Photo" className="object-contain h-[100%] w-[100%]"/>
            </div>
            <div className={`md:w-[45%] h-full flex flex-col gap-5 md:text-left w-full text-teal`}>
                <p className="font-NovoMono text-[16px]">{date.getMonth() + 1}.{date.getDate()}.{date.getFullYear()}</p>
                <p className="font-semibold text-[32px]">{props.blog.title}</p>
                <p className="font-RedHat text-[20px]">
                    {props.blog.description}
                </p>
                <div className="w-fit border-b-[2px] border-teal hover:border-coffee hover:text-coffee cursor-pointer"
                    onClick={()=>blogPage()}
                >
                        <p className="font-RedHat text-[20px]">Read More</p>
                </div>
            </div>
        </div>
    )
}

export default Preview