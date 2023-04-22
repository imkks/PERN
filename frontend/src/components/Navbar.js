import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {
const {user}=  useAuth()
    return (
        <nav >
    <ul>
      <li><strong>My App</strong></li>
    </ul>
    <ul>
      {user?(
        <>
         <li>Hi {user.name}</li>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to='/logout'>Logout </Link></li>
        </>
     ):
      (<><li><Link to='/login'>Login </Link></li>
      <li><Link to='/signup'>Signup</Link></li>
        </>)}
    </ul>
</nav>
    )
}

export default Navbar
