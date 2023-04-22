import UserModel from "../model/user.js";
import { verifyToken } from "../utils/auth.js";
import { MyError } from "../utils/error.js";

export const AuthMiddleWare=async (request,response,next)=>{

    try
    {
    const cookies= request.cookies;
    if(cookies && cookies.Authorization)
    {
        try {
       let payload= verifyToken(cookies.Authorization,'Mysecret')

            let id=payload.id;
            let user=await UserModel.findByPk(id)
            if(user)
            {
                request.user=user.toJSON();
                next();
            }
            else
                throw new Error('Bad Credentials')

            
        } catch (error) {
            throw new MyError(401,'Bad Credentials')
            
        }

    }
    else 
    {
        throw new MyError(401,'Missing Credentials')
    }
    }
    catch(e)
    {
        next(e)
    }
}