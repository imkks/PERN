import React, { useCallback, useContext, useEffect, useReducer } from "react"
import { useAuth } from "./AuthContext"
import { getPosts,createPost } from "../services/post"

const PostContext=React.createContext()
export const usePost=()=>{
    return useContext(PostContext)
}
const initialState={
    posts:[],
    loading:false,
    error:null
}
const reducer=(state,action)=>
{
    switch(action.type)
    {
        case 'GET_POSTS_REQUEST':
        case 'CREATE_POST_REQUEST':
            return {...state,loading:true,error:null};
        case 'GET_POSTS_SUCCESS':
            return {loading:false,error:null,posts:action.payload}
        case 'CREATE_POST_SUCCESS':
            return {loading:false,error:null,posts:[...state.posts,action.payload]}
        case 'GET_POSTS_ERROR':
        case 'CREATE_POST_ERROR':
            return {...state,loading:false,error:action.payload}
        default:
            return state;
        
        

    }
}
export const PostProvider=({children})=>
{
    const {user}=useAuth()
    // const [Posts, setPosts] = useState([])
    console.log('Hi')
    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchPosts=useCallback( async()=>{
            
        //    let response= await axios.get('http://localhost:4000/posts',{withCredentials:true})
        //     setPosts(response.data);
        // } 
        // console.log('fetchposts')
    try {
        if(user)
        {
            dispatch( {type:'GET_POSTS_REQUEST'})
            let reponse=await getPosts()
            if(reponse.statusText==='OK')
            {
                // console.log(reponse.data)
                dispatch({type:'GET_POSTS_SUCCESS',payload:reponse.data})
                // setPosts(reponse.data)
            }

            
        }
            
    } 
    catch (error) {
        console.log(error);
        dispatch({type:'GET_POSTS_ERROR',payload:error.message})
        }
    },[user])
    const addPost= async(postData)=>{
        try {
            dispatch( {type:'CREATE_POST_REQUEST'})

            let response= await createPost(postData)
            console.log(response)
            if(response.statusText==='OK')
            {
                dispatch({type:'CREATE_POST_SUCCESS',payload:response.data})

                fetchPosts()

            }
        }
         catch (error) {
        console.error(error);
        dispatch( {type:'CREATE_POST_ERROR'})


            
        }
        // let response= await axios.post('http://localhost:4000/posts',postData,{withCredentials:true})
        // setPosts([...Posts,response.data])


}

    useEffect( () => {
            console.log('use effect call')
         fetchPosts()
        }, [fetchPosts])
    
    const value={"Posts":state.posts,addPost}
    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}
