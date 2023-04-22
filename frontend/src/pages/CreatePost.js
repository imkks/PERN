import { useNavigate } from "react-router-dom";
import { usePost } from "../contexts/PostContext";

const CreatePost = () => {
    const navigate=useNavigate()
    const {addPost}=usePost()
    const submitHandler=async (event) => {
        event.preventDefault();
        // console.log(event)
        let postData={title:event.target[0].value,content:event.target[1].value}
        await addPost(postData)
        // console.log(postData)
        navigate('/')


    }
    return (
        <form onSubmit={submitHandler} style={{width:'50%'}} className="container">
            <label>Title</label>
            <input type="text"></input>
            <label>Content
                <textarea  cols="30" rows="20"></textarea>
            </label>
            <button type="submit">Submit</button>

        </form>
    )
}

export default CreatePost
