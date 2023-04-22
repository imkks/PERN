
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import RequiredAuth from './components/RequiredAuth';
import { AuthProvider } from './contexts/AuthContext';
import CreatePost from './pages/CreatePost';
import { PostProvider } from './contexts/PostContext';
import PostDetail from './components/PostDetail';
import Post from './pages/Post';
import Logout from './pages/Logout';
import AuthVerify from './components/AuthVerify';

function App() {
  return (
    <div style={{padding:"20px"}}>
      <BrowserRouter>
      <AuthProvider>
      <PostProvider>
      <Navbar ></Navbar>
      
        <Routes>
        <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/logout' element={<Logout/>} />

          <Route exact path='/' element={<RequiredAuth><Home/></RequiredAuth>}></Route>
          <Route path='create' element={<RequiredAuth><CreatePost/></RequiredAuth>}/>
          <Route path='post/:id' element={<RequiredAuth><Post/></RequiredAuth>}/>


        </Routes>
          
        </PostProvider>
        <AuthVerify></AuthVerify>
      </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
