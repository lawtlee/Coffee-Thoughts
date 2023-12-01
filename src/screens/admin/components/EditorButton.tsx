import React from "react"

interface props{
    title: string;
}

const EditorButton:React.FC<props> = ({ title }) => {
    return(
        <div className="flex flex-col justify-end h-[62px]">
            <div 
                className="w-[11vw] bg-[#547E88] text-[16px] text-center pt-2 pb-2 rounded-[27.5px]
                text-white flex flex-row justify-center items-center hover:cursor-pointer hover:text-black"
            >
                <p>{title}</p>
            </div>
        </div>
    )
}

export default EditorButton