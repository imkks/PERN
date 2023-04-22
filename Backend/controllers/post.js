import CommentModel from "../model/comment.js";
import PostModel from "../model/post.js"
import UserModel from "../model/user.js";
import { MyError } from "../utils/error.js";

export const createPost=async(insertPost,userId)=>
{
    try {
        let insertedPost=await PostModel.create({...insertPost,UserId:userId})
        return insertedPost;
    } catch (error) {
        throw new MyError('502',error)
    }
       
}
export const findPosts= async(userId)=>{
    let foundPosts=await PostModel.findAll({where:{UserId:userId},
        // attributes:{exclude:['password']},
        include:[{model:UserModel,attributes:['name','email']},
        {model:CommentModel,attributes:['id','description']}
        ]})
    return foundPosts

}
export const findPost=async(id)=>{
    return await PostModel.findByPk(id)

}
export const updatePost=async (updatePost)=>{
    return await PostModel.update(updatePost)

}
export const deletePost=async(id)=>{
    await PostModel.destroy({where:{id}});
}