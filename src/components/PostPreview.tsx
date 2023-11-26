import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface props{
    blog:{
        image: string,
        title: string,
        date: string,
        description: string,
        link: string,
    },
    index: number,
}

function Preview(props: props): JSX.Element {
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        if (props.index) setIndex(props.index)
        
        console.log(props)

    })

    return(
        <div className={`flex w-[75vw] ${(index % 2 == 0) ? "flex-wrap" : "flex-nowrap"} justify-between`}>
            <div className={`w-[45%] bg-[#D9D9D9] h-[301px] flex justify-center items-center`}>
                <img src={props.blog.image} alt="Photo" className="contain"/>
            </div>
            <div className={`w-[45%] h-full flex flex-col gap-5 text-left text-teal`}>
                <p className="font-NovoMono text-[16px]">{props.blog.date}</p>
                <p className="font-semibold text-[32px]">{props.blog.title}</p>
                <p className="font-RedHat text-[20px]">
                    {props.blog.description}
                </p>
                <div className="w-fit border-b-[2px] border-teal hover:border-coffee hover:text-coffee">
                    <Link to={`/${props.blog.link}`}>
                        <p className="font-RedHat text-[20px]">Read More</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Preview