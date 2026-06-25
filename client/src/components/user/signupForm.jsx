
import { useState } from "react" 
import { useNavigate } from "react-router-dom"
import { signupUser } from "../../services/api.js"

 function SignupForm () {
  const navigate = useNavigate()
 const [username, setusername] = useState("")
  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setuserPassword] = useState("")
  const [isSignedup, setisSignedup] = useState(false)
 const [isEmptyFields, setisEmptyFields] = useState(false)
const [isAlreadyUser, setisAlreadyUser] = useState(false)
const [isError, setisError] = useState(false)

 const handleNavigate = ()=>{
  
  navigate("/api/flowdesk/login")
 }
  
  const handleSubmit = async(e)=>{
    
    
    e.preventDefault()
   let user =await  signupUser(userEmail, username, userPassword,setisSignedup ,setusername ,setuserPassword,setuserEmail)



  
  }
  
  

  

  return (
    <>
<form >   
    <label htmlFor='userEmail'>Email</label>
    
        <input type="email"  name="userEmail" id='userEmail' onChange={(e)=>setuserEmail(e.target.value)} value={userEmail} className='border-2' />
        <label htmlFor='username'>Username</label>
    
        <input type="text"  name="username" id='username' onChange={(e)=>setusername(e.target.value)} value={username} className='border-2' />
        
    <label htmlFor='userPassword'>Password</label>
    
        <input type="password"  name="userPassword" id='userPassword' onChange={(e)=>setuserPassword(e.target.value)} value={userPassword} className='border-2 ' />
        <button type="submit" onClick={handleSubmit} >sumbit</button>
   
</form>



 {isSignedup ? (<p>account created please login </p> , <button onClick={handleNavigate}>login</button>
    
   
  ):(<p></p>)} 

 
</>
  )}
 
export default SignupForm
