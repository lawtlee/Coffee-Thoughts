import { Blog } from "./types";

function TimeStampToDate(date : any){
    console.log(date)
    return 1;
}

function sortByDate(blogs: Array<any>, asc: boolean): Array<Blog>{
    // Ascending is oldest, descending is newest
    // If Asc sort by oldest first, Descending is sort by newest
    let sorting = asc ? 1 : -1;
    blogs.sort((a,b)=> {
        const dateA = new Date((a.date.seconds * 1000) + (a.date.nanoseconds / 1000000))
        const dateB = new Date((b.date.seconds * 1000) + (b.date.nanoseconds / 1000000))
        return sorting * (dateA.valueOf() - dateB.valueOf())
    })
    return blogs;
}

function sortByCategory(blogs: Array<Blog>, category: string): Array<Blog>{
    const result = <Blog[]>[]
    
    blogs.forEach((blog)=>{
        if (blog.category == category)
            result.push(blog)
    })

    return result
}

async function autoFill(blogs: Array<Blog>, query: string): Promise<Array<string>>{
    const results:  string[] = [];

    if (query == "")
        return []

    for (const blog of blogs){
        const dateTime =  new Date((blog.date.seconds * 1000) + (blog.date.nanoseconds / 1000000))
        const date = `${dateTime.getMonth()}.${dateTime.getDay()}.${dateTime.getFullYear()}`
        if (blog.title.toLowerCase().includes(query.toLowerCase()) 
            || blog.description.toLowerCase().includes(query.toLowerCase()) 
            || date.includes(query.toLowerCase())){
            if (results.length < 5)
                results.push(blog.title);
        }   
    }

    return results;
}

export { TimeStampToDate, sortByDate, sortByCategory, autoFill }