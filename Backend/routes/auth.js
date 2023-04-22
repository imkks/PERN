import express, { response } from 'express'
import * as userController from '../controllers/user.js';
import { validationMiddleware } from '../middlewares/validationmiddleware.js';
import { loginSchema } from '../validation/userschema.js';

const  authRouter=express.Router()
authRouter.post('/login',validationMiddleware(loginSchema),async (request, response,next) => {
    try
    {
    let {foundUser,exp,authToken}=await userController.logIn(request.body)
    // console.log(foundUser)
    foundUser=foundUser.toJSON();
    foundUser["exp"]=exp;
    // console.log(foundUser)
    request.user=foundUser
    response.setHeader('Set-Cookie',createCookie(authToken))
    // response.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
    // response.header('Access-Control-Allow-Credentials', true);
    // response.header('Access-Control-Allow-Methods', 'POST');
    // response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    // foundUser.toJSON();
    response.json(foundUser);
    }
    catch(e)
    {
        console.error(e)
        next(e)
    }
}
)
authRouter.post('/signup',async (request,response, next)=>{
    try
    {
    let {createdUser,token}=await userController.createUser(request.body)
    // createdUser.password=undefined;
    response.setHeader('Set-Cookie',createCookie(token))
    response.json(createdUser.toJSON())
    
    }
    catch(e)
    {
        console.error(e)   
        next(e)
    }
})
authRouter.get('/logout',(request,response,next)=>{
    try
    {
    response.cookie('Authorization','',{httpOnly:true})
    response.send("User Logged out")
    // throw new Error("my error")
    // response.json(createdUser.toJSON())
    }
    catch(e)
    {
        // console.error(e)
        next(e)
    }

})
function createCookie(token)
{
    return `Authorization=${token}; HttpOnly; Max-Age=300`
}
export default authRouter
