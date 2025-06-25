import { Route, Routes } from "react-router"
import { HomePage } from "./assets/homePage"
import { Dashbord } from "./assets/dashbord"
import ProtectedPage from "./Component/protected"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/dashbord" element={
         
         <ProtectedPage> 
              <Dashbord/>
         </ProtectedPage>
         }/>
      

    
      
    </Routes>
  )
}

export default App
