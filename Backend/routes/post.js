import  express  from "express"
import * as PostController from '../controllers/post.js'
import { AuthMiddleWare } from "../middlewares/authmiddleware.js"
import { MyError } from "../utils/error.js";
const postRouter=express.Router()
postRouter.use(AuthMiddleWare);
postRouter.post('/',async (request, response,next) => {
    try
    {
        // console.log(request.user.id)
        let createdPost=await PostController.createPost(request.body,request.user.id);
        response.json(createdPost)
    }
    catch(e)
    {
        next(e)
    }
})
postRouter.get('/',async (request, response,next) => {
    try
    {
        let foundPosts=await PostController.findPosts(request.user.id);
        response.json(foundPosts)
    }
    catch(e)
    {
        next(e)
    }
})
export default postRouter