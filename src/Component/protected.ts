import type { ReactNode } from "react"
import { useNavigate } from "react-router"
import { useSelector } from 'react-redux';

interface Iprops {
    children:ReactNode
}

const ProtectedPage = ({children }:Iprops) => {

    const navigate =useNavigate()
    const login = useSelector(state=>state.isAuth.login)

if (login) { 
    return navigate("/")
}  else {
    return children
}

}

export default ProtectedPage