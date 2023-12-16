import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@mui/material"

const HelperBar:React.FC = () => {
    const [search, setSearch] = useState("");
    const [startSearch, setStart] = useState(false);

    const navigate = useNavigate()


    return(
        <div className="w-[80%] h-[60px] rounded-[34.5px] flex items-center justify-evenly flex-row">
            <div className="w-[70%] border-2 border-black h-[60px] rounded-[34.5px] bg-white
                flex flex-row justify-between items-center 
            ">
                <div className="pl-5 w-[90%]">
                    <Input
                        disableUnderline={true}
                        placeholder={"Search..."}
                        onChange={(e)=>{
                            setSearch(e.target.value);
                            setStart(true);
                        }}
                        sx={{
                            fontFamily: "Red Hat Mono",
                            width: "100%",
                        }}
                        value={search}
                    />
                </div>
                <div className={`pr-5 ${startSearch ? "block" : "hidden"}`}>
                    <img src="/admin/search.png" alt="search button"/>
                </div>
            </div>
            <div className="cursor-pointer"
                onClick={()=>navigate("../addblog")}
            >
                Add Blog
            </div>            
        </div>
    )
}

export default HelperBar