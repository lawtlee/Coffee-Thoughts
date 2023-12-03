import { database, storage } from "../firebase"
import { collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { sortByDate } from "./dataParsing"

interface addBlogsProps{
    bodyText: string,
    title: string,
    description: string,
    category: string,
    images: string[]
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

const retrieveAllBlogs = async (asc: boolean): Promise<Array<blogStruct>> => {
    const topics = ["coffee-shops", "deez", "cs"]
    let blogs: blogStruct[] = [];

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
        blogs = sortByDate(blogs, asc)
    });

    return blogs;
}

const retireveAllTopic = async(topic: string, asc: boolean) => {
    let blogs: blogStruct[] = [];

    const querySnapshot = await getDocs(collection(database, topic));
    querySnapshot.forEach(async (data) => {
        const blogData = data.data();
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
    
    blogs = sortByDate(blogs, asc);

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
    console.log(docRef)

    return {status: 1, message: "Uploaded Document!"};
}

const fetchBlogs = async(topic: any, id: any) => {
    const docRef = doc(database, topic, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return docSnap.data();
    } else{
        throw new Error("Blog Doesn't Exist");
    }
}

const uploadImage = async(images: File[]): Promise<{status: number, message: string, imageUrls: string[]}> => {
    console.log("here")

    const imagePaths: string[] = [];
    images.forEach((image)=>{
        const storageRef = ref(storage, image.name)
        imagePaths.push(image.name)
        uploadBytes(storageRef, image)
            .catch((err)=>{
                return ({status: 200, message: err, imageUrls: []})
        });
    })

    return {status: 100, message: "Uploaded Images", imageUrls: imagePaths};
}

const retrieveImage = async(imagePath: string)=> {
    const imageRef = ref(storage, imagePath)
    const result = await getDownloadURL(imageRef)
    return result
}

const retrieveAllImages = async(images: string[]) => {
    const imagePaths: string[] = [];
    for (const image of images){
        const imageRef = ref(storage, image);
        const result = await getDownloadURL(imageRef)
        imagePaths.push(result)
    }
    return imagePaths;
}

export { retrieveAllBlogs, addBlogs, retireveAllTopic, 
    fetchBlogs, uploadImage, retrieveImage, retrieveAllImages }