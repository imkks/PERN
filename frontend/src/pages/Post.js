import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail"
import { usePost } from "../contexts/PostContext";

const Post = (props) => {
    const params =useParams()
    const {Posts}=usePost();
    
    return (
        <div>
            <PostDetail post={Posts.filter((post)=>{
                return post.id==params.id})[0]}></PostDetail>
        </div>
    )
}

export default Post
