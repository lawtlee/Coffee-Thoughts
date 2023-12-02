// import { Timestamp } from "firebase/firestore";


function TimeStampToDate(date : any){
    console.log(date)
    return 1;
}

function sortByDate(blogs: Array<any>, asc: boolean): Array<any>{
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

export { TimeStampToDate, sortByDate }