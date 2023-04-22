import  express  from "express"
import * as commentController from '../controllers/comment.js'
import { AuthMiddleWare } from "../middlewares/authmiddleware.js"
import { MyError } from "../utils/error.js";
const commentRouter=express.Router()
commentRouter.use(AuthMiddleWare);
commentRouter.post('/',async (request, response,next) => {
    try
    {
        // console.log(request.user.id)
        let createdcomment=await commentController.createComment(request.body,request.user.id);
        response.json(createdcomment)
    }
    catch(e)
    {
        next(e)
    }
})
// commentRouter.get('/',async (request, response,next) => {
//     try
//     {
//         let foundcomments=await commentController.findcomments(request.user.id);
//         response.json(foundcomments)
//     }
//     catch(e)
//     {
//         next(e)
//     }
// })
export default commentRouter