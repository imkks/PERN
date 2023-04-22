import {  useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const {user,login} =useAuth()
    const navigate=useNavigate()
    const submitHandler=async (event) => {
        event.preventDefault();
        // console.log(event)
        await login(event.target[0].value,event.target[1].value);
        navigate('/')
        // return redirect('/')


    }
    return (
        <form onSubmit={submitHandler} style={{width:'50%'}} className="container">
            <label for="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="Email address" required/>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login
