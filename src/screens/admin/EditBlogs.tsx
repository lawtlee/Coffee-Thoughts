import React, { useEffect } from "react"
import { useParams } from "react-router"

const Editor: React.FC = () => {
    const { id } = useParams();
    
    useEffect(()=>{

    },[])

    return(
        <div>
            {id}
        </div>
    )
}

export default Editor