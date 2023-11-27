import { getDoc, collection, query, doc } from "firebase/firestore"
import { database } from "../firebase"

interface props{
    topic: string,
    id: string,
}

const EditorLoader = async({ params }: { params: props }) => {
    let blogData;
    const { topic,  id } = params

    if (topic != 'deez' && topic != 'cs' && topic != 'coffee-shops')
        throw new Error("Invalid Topic")

    const document = doc(database, topic, id);
    const snapshot = await getDoc(document)

    if (snapshot.exists()){
        blogData = snapshot.data()
    }
    else{
        throw new Error("Blog Doesn't Exist")
    }
    
    return blogData;
}



export default EditorLoader