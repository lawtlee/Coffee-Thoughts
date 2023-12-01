import { database } from "../firebase"
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore"
import { TimeStampToDate, sortByDate } from "./dataParsing"

interface addBlogsProps{
    bodyText: string,
    title: string,
    description: string,
    category: string,
    images: Array<any>
}

interface blogStruct{
    title: string,
    date: {
        seconds: number,
        nanoseconds: number,
    },
    id: string,
    images: Array<string>,
    category: string
    description: string,
    bodyText: string
}

const retrieveAllBlogs = async (): Promise<Array<blogStruct>> => {
    const topics = ["coffee-shops", "deez", "cs"]
    const blogs: blogStruct[] = [];

    await Promise.all(
        topics.map(async (topic) => {
            const querySnapshot = await getDocs(collection(database, topic));
            querySnapshot.forEach(async (data) => {
                const blogData = data.data();
                // console.log(blogData)
                const blogObject: blogStruct = {
                    title: blogData.title,
                    date: blogData.date,
                    images: blogData.images,
                    id: data.id,
                    category: topic,
                    description: blogData.description,
                    bodyText: blogData.bodyText,
                }
                blogs.push(blogObject)
            })
        })
    )
    .then(()=>{
        sortByDate(blogs, true)
    });

    return blogs;
}

const addBlogs = async (props: addBlogsProps): Promise<{status: number, message: string}> => {
    const date = new Date();
    
    const uploadData = {
        bodyText: props.bodyText,
        title: props.title,
        description: props.description,
        images: props.images,
        date: date
    }

    const docRef = await addDoc(collection(database, props.category.replace(/\s+/g, '-').toLowerCase()), uploadData)
        .catch((err) => {
            console.log(err)
            return{status: 200, message: err}
        })

    return {status: 1, message: "Uploaded Document!"};
}

// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
// });

export { retrieveAllBlogs, addBlogs,}