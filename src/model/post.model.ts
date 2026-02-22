import mongoose from "mongoose";

interface Ipost{
    _id?:mongoose.Types.ObjectId,
    user_id:string,
    caption:string,
    image:string,
    createdAt?:Date,
    likes:number
}

const postSchema = new mongoose.Schema<Ipost>({
    user_id:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    }
},{timestamps:true}); 


const Post = mongoose.models.Post || mongoose.model('Post',postSchema);
export default Post;