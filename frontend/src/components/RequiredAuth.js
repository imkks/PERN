
import { useAuth } from "../contexts/AuthContext"
import { Navigate} from "react-router-dom";

const RequiredAuth = ({children}) => {
    const {user,login}=useAuth();
    
    if(user)
        return children;
    else
    {

        return <Navigate to='/login'/>
    }
    // {user?children:<Navigate to='/login'/>}
    
        
    
}

export default RequiredAuth
