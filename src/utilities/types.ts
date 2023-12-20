export type Blog = {
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