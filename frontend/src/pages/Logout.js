import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useEffect } from "react"

const Logout = () => {
    const {logout} =useAuth()
    useEffect(() => {
        logout()
        
    }, )
    return (
        <Navigate to='/login' />
    )
}

export default Logout
