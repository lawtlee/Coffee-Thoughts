import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import AdminNavbar from "./components/AdminNavbar";
import { DescriptionField, TitleField, SelectCategory, MainBody } from "./components/EditorComponents";
import EditorButton from "./components/EditorButton";
import ImageUpload from "./components/UploadImage";
import { addBlogs } from "../../utilities/utilities";

const AddBlog: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const [returnToDash, setReturn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<any>([])
    
    const navigate = useNavigate();

    const uploadBlog = async () => {
        setLoading(true);

        const data = {
            bodyText: body,
            title: title,
            description: description,
            images: images,
            category: category,
        }

        const res = await addBlogs(data);

        console.log(res)

        setLoading(false)
    }

    useEffect(()=>{
        console.log(images)
    },[images])

    return(
        <div className="flex flex-col items-center gap-10 pb-10">
            <div className={`w-full h-full bg-[#D9D9D9]/40 fixed flex-row justify-center items-center ${loading ? "flex" : "hidden"} z-[1]`}>
            </div>
            <AdminNavbar/>
            <div className="w-[70vw] flex-col flex gap-5">
                <div className="flex flex-row gap-5 items-end justify-between">
                    {/* Plus Circle */}
                    <div className="flex flex-row gap-5 text-[36px] items-center text-white cursor-default pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <circle cx="13" cy="13" r="13" fill="#547E88"/>
                            <line x1="13" y1="6" x2="13" y2="20" stroke="white" strokeWidth="2"/>
                            <line x1="20" y1="13" x2="6" y2="13" stroke="white" strokeWidth="2"/>
                        </svg>
                        <p>
                            ADD POST
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-1 hover:text-[#547E88] underline hover:underline-[#547E88]
                        cursor-pointer"
                        onClick={()=>navigate("/admin/dashboard")}
                        onMouseEnter={()=>setReturn(true)}
                        onMouseLeave={()=>setReturn(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                            <path d="M11 7L0.5 0.937822V13.0622L11 7Z" fill={returnToDash ? "#547E88" : "#404040"}/>
                        </svg>
                        <p className="font-RedHat text-[14px]"> 
                            Return to Dashboard
                        </p>
                    </div>
                </div>
                <div className="text-black flex-row flex justify-between items-center">
                    <TitleField stateFunction={setTitle} value={title}/>
                    {/* <EditorButton title="UPLOAD IMAGE"/> */}
                    {/* <EditorButton title="UPLOAD IMAGE" /> */}
                    <ImageUpload images={images} setImage={setImages}/>
                    <div
                        onClick={()=>console.log("here")}
                    >
                        <EditorButton title="SAVE DRAFT"/>
                    </div>
                    <div onClick={()=>{uploadBlog()}}>
                        <EditorButton title="PUBLISH"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[100%]">
                    <div className="w-[70%]">
                        <DescriptionField stateFunction={setDescription} value={description}/>
                    </div>
                    <div className="w-[25%] flex flex-col text-[20px] items-end">
                        <SelectCategory stateFunction={setCategory} value={category}/>
                    </div>
                </div>
                <div className="w-[100%]">
                    <MainBody stateFunction={setBody} value={body}/>
                </div>
            </div>
        </div>
    )
}

export default AddBlog