import { getDoc, collection, query, doc } from "firebase/firestore"
import { database } from "../firebase"
import { retrieveAllBlogs } from "./utilities"

interface props{
    topic: string,
    id: string,
}

const EditorLoader = async({ params }: { params: props }) => {
    if (localStorage.getItem("uid") == null)
        throw new Error("Not an Admin")
    
    const { topic,  id } = params

    if (topic != 'deez' && topic != 'cs' && topic != 'coffee-shops')
        throw new Error("Invalid Topic")

    const document = doc(database, topic, id);
    const snapshot = await getDoc(document)

    if (snapshot.exists()){
        console.log(snapshot.data().Date)
        return snapshot.data()
    }
    else{
        throw new Error("Blog Doesn't Exist")
    }
}

const DashboardLoader = async() =>{
    retrieveAllBlogs();
}

const adminLoader = () =>{
    return localStorage.getItem("uid")
}

export { EditorLoader, DashboardLoader, adminLoader }