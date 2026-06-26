
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useNavigate } from "react-router-dom"
import './App.css'


function App() {
  

  return (
    <>
  
    
      <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Login/>} ></Route>
       <Route path="/success" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
       
       
    </>
  )
}

export default App
