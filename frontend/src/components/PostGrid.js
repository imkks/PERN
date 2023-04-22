import axios from "axios"
import { useEffect, useState } from "react"
import { usePost } from "../contexts/PostContext"
import { useNavigate } from "react-router-dom";

const PostGrid = () => {
    const {Posts}=usePost();
    // const [Posts, setPosts] = useState([])
    // useEffect( () => {
    //     const fetchPosts=async()=>{
            
    //        let response= await axios.get('http://localhost:4000/posts',{withCredentials:true})
    //         setPosts(response.data);
    //     } 
    //     fetchPosts(); 
         
    // }, [])
    const navigate=useNavigate()
    
    return (
        <div>
            <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr",gap:"20px"}}>
                
                {Posts.map(post=>(
                    <article onClick={()=>navigate(`post/${post.id}`)} key={post.id}>
                       <header> {post.title}</header>
                       <p>{post.content.substr(0,100)}...</p>
                        </article>
                )

                )}

                
            </div>
        </div>
    )
}

export default PostGrid

