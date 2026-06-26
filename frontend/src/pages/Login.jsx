import { useState } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login =()=>{
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
    const[error,seterror]=useState("")
    const navigate=useNavigate()

    function handleemail(event)
        {
            setemail(event.target.value)

        }


        function handlepass(event)
        {
            setpass(event.target.value)
        }

        function handleSubmit()
        {

             if (email === "" || pass === "") {
    seterror("All fields are required")
    
    return
  }

  seterror("")
  axios.post("http://localhost:3000/login", {email: email, password: pass})
.then((res) => {
  if (res.data === "login success") {
    navigate("/success");
  } else {
    seterror("Invalid Credentials");
  }
})
.catch(() => {
  seterror("Server Error");
});


          
        
        }


    return(
        <>
       <div className="container">
  <div className="login-box">
    <h2 className="logo">NETFLIX</h2>
<h1>Sign In</h1>
  

    <input type="email" placeholder="Email" onChange={handleemail} />

    <input type="password" placeholder="Password" onChange={handlepass}/>

    {error && <p className="error">{error}</p>}

    <button onClick={handleSubmit}>Sign In</button>
  </div>
</div>
        </>
    )
}


export default Login