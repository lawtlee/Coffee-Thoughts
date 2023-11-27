import React, { useEffect } from "react"
import { useParams } from "react-router"
import { updateDoc } from "firebase/firestore";
import HTML404 from "../404html";

const Editor: React.FC = () => {
    const params = useParams();
    
    // useEffect(()=>{

    // },[])

    // if (id != "")
    //     return <HTML404/>

    return(
        <div>
            {params.topic}
        </div>
    )
}

export default Editor