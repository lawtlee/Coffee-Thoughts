import { FaRegTrashAlt, FaPencilAlt, FaExternalLinkAlt } from "react-icons/fa";
import "./BlogCard.scss"

interface prop{
    title: string,
    date: string,
    id: string,
    image: string,
}

function BlogCard(props: prop): JSX.Element {
    return(
        <div className="w-[80%] flex gap-5 h-[100px] items-center bg-white border-black border-2">
            <div className="w-[15%] bg-[#D9D9D9] h-full flex justify-center items-center">
                <img src={props.image} alt="Photo"/>
            </div>
            <div className="flex items-center justify-between w-[85%]">
                <p className="text-[32px]">{props.title}</p>
                <p className="font-NovoMono text-[16px]">{props.date}</p>
                <div className="flex justify-evenly items-center w-[10%]">
                    <div>
                        <FaExternalLinkAlt className="button"/>
                    </div>
                    <div>
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