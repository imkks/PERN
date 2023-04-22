import  CommentModel  from "../model/comment.js"

export const createComment=async(insertComment,userId)=>
{
        let insertedComment=await CommentModel.create({...insertComment,UserId:userId})
        return insertedComment;
}
// export const findComment= async(userId)=>{
//     let foundPosts=await PostModel.findAll({where:{UserId:userId},
//         // attributes:{exclude:['password']},
//         include:{model:UserModel,attributes:['name','email']}})
//     return foundPosts

// }