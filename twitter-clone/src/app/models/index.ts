export interface user{
    id: number,
    image:string,
    name:string,   
    email: string,
    website:string,
    city: string
}
export interface post{
    userId:number,
    id: number,
    title:string,
    body:string
    showComments?: boolean; 

}
export interface comment{
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string
}