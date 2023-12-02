import { getDoc, doc } from "firebase/firestore"
import { database } from "../firebase"
import { retrieveAllBlogs } from "./utilities"

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

export { DashboardLoader, adminLoader, BlogLoader }