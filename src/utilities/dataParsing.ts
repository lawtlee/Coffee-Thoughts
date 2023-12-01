import { Timestamp } from "firebase/firestore";



function compareFunction(){

}

function TimeStampToDate(date : any){
    // console.log(date)
    return 1;
}

function sortByDate(blogs: Array<any>, asc: boolean): void{
    // Ascending is oldest, descending is newest
    // If Asc sort by oldest first, Descending is sort by newest
    let sorting = asc ? 1 : -1;
    blogs.sort((a,b)=> sorting * (a - b))
}

export { TimeStampToDate, sortByDate }