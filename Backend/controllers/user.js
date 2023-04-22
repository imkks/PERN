
import UserModel from "../model/user.js";
import * as bcrypt from  'bcrypt'
import { MyError } from "../utils/error.js";
import { createToken } from "../utils/auth.js";



export const findAll=async ()=>{
            const foundUsers=await UserModel.findAll();
            // console.log(foundUsers)
            return foundUsers;

    }
export const find = async (id)=>{
    const foundUser = await UserModel.findOne({where:{id}})
    return foundUser;
}
export const logIn =async(creds)=>{
    const foundUser= await UserModel.findOne({where:{email:creds.email}})
    if(foundUser)
    {
        const isPasswordMatching=await bcrypt.compare(creds.password,foundUser.password)
        if(isPasswordMatching)
        {
            foundUser.password=undefined;
            let {authToken,exp}=createToken({id:foundUser.id,email:foundUser.email})
            // foundUser.iat=iat;
            // console.log(foundUser)
            
            return {foundUser,exp,authToken}
        }
        else
            throw new MyError(402,'Bad Credentials')
    }
    else
        throw new MyError(402,'Bad Credentials')
}
export const createUser = async(insertUser)=>{
    const userExist= await UserModel.findOne({where:{email:insertUser.email}})
    if(userExist)
        throw new MyError(402,'User already exist')
    else
    {
        const hashedPassword= await bcrypt.hash(insertUser.password,10)
        let createdUser= await UserModel.create({...insertUser,password:hashedPassword})
        
        createdUser.password=undefined;
        
        let token=createToken({id:createdUser.id,email:createdUser.email})
        
            return {createdUser,token}
        

    }
    
}
export const deleteUser= async(id)=>{
    await UserModel.destroy({where:{id}});
    r
}

