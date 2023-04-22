import axios from "axios";
import { BASE_URL } from ".";
export const getPosts=()=>{
            
    return axios.get( `${BASE_URL}/posts`,{withCredentials:true})
    
 } 
export const createPost= (postData)=>{
    return axios.post(`${BASE_URL}/posts`,postData,{withCredentials:true})
    


}
