import { useNavigate } from "react-router"

const ProtectedPage = ({children}) => {

    const navigate =useNavigate()
     const isautorization =false
if (!isautorization ) { 
    return navigate("/")
}  else {
    return children
}

}

export default ProtectedPage