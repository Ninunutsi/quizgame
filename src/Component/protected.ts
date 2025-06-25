import type { ReactNode } from "react"
import { useNavigate } from "react-router"

interface Iprops {
    children:ReactNode
}

const ProtectedPage = ({children }:Iprops) => {

    const navigate =useNavigate()
     const isautorization = false

if (!isautorization ) { 
    return navigate("/")
}  else {
    return children
}

}

export default ProtectedPage