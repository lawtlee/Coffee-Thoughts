import { getDoc, collection, doc, getDocs } from "firebase/firestore"
import { database } from "../firebase"
import { retrieveAllBlogs } from "./utilities"
import { useParams } from "react-router-dom"

const EditorLoader = async() => {
    if (localStorage.getItem("uid") == null)
        throw new Error("Not an Admin")
    
    const { topic,  id } = useParams()

    if (topic != 'deez' && topic != 'cs' && topic != 'coffee-shops')
        throw new Error("Invalid Topic")

    const document = doc(database, topic, id);
    const snapshot = await getDoc(document)

    if (snapshot.exists()){
        // console.log(snapshot.data().Date)
        return snapshot.data()
    }
    else{
        throw new Error("Blog Doesn't Exist")
    }
}

const DashboardLoader = async() =>{
    retrieveAllBlogs(false);
}

const BlogLoader = async({ params }: { params: any }) => {
    const topic = params.category
    const id = params.id

    if (topic != 'coffee-shops' && topic != "cs" && topic != "deez")
        throw new Error("Invalid Topic");
    const document = doc(database, topic, id);
    const snapshot = await getDoc(document)

    if (snapshot.exists()){
        return snapshot.data()
    } else{
        throw new Error("Blog Doesn't Exist");
    }
}

const adminLoader = () =>{
    return localStorage.getItem("uid")
}

export { EditorLoader, DashboardLoader, adminLoader, BlogLoader }