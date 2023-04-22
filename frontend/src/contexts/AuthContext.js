import axios from "axios"
import React, { useContext, useState } from "react"

const AuthContext=React.createContext()
export const useAuth=()=>{
    return useContext(AuthContext)
}
export const AuthProvider=({children})=>
{
    const [user, setUser] = useState(()=>{
      console.log(localStorage.getItem('user'))
      if(localStorage.getItem('user'))
        return JSON.parse(localStorage.getItem('user'))
      else
        return null
    });
    const login = async (email, password) => {
        const response = await axios.post('http://localhost:4000/login', {
          email,
          password,
        },{withCredentials:true});
        // console.log(response)
        localStorage.setItem('user',JSON.stringify(response.data));
        setUser(response.data)
        // setUser({
        //     id: 1,
        //     name: "krishna",
        //     email: "imkrish007@gmail.com",
            
        // })
    }
    // const getCurrentUser=()=>
    // {

    // }
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
      };
    const value={user,login,logout}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
