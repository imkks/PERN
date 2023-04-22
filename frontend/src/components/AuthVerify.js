import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthVerify = () => {
    let location =useLocation();
    let {user,logout}=useAuth()
    useEffect(() => {
        console.log(user?.exp)
        if(user && user.exp<Date.now())
        {
            console.log(user.exp<Date.now())
            logout();

        }
        
    }, [location,logout,user])
    return;
}

export default AuthVerify
