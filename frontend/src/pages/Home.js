import { redirect, useNavigate } from 'react-router-dom';
import PostGrid from '../components/PostGrid';
import { PostProvider } from '../contexts/PostContext';
const Home = () => {
    const navigate= useNavigate();
    return (
        // <PostProvider>
        <div>
            <article>
                <header>My Blog App</header>
                <h3>
               I am krishna. This is a blog app by me.
                </h3>
                <footer> <a  onClick={()=>navigate('/create')} role="button" >Create Post</a></footer>
            </article>
            <PostGrid></PostGrid>
        </div>
        // </PostProvider>
    )
}

export default Home
