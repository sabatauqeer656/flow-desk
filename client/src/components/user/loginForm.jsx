
import { useState } from "react" 
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/api"

 function LoginForm () {
  const navigate = useNavigate()

  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setuserPassword] = useState("")
  

 
  
  const handleSubmit = async(e)=>{
    
    
    e.preventDefault()
   let user = await loginUser(userEmail, userPassword)

    navigate("/api/flowdesk/home")

  
  }
  
  

  

  return (
    <>
<form >   
    <label htmlFor='userEmail'>Email</label>
     <input type="email"  name="userEmail" id='userEmail' onChange={(e)=>setuserEmail(e.target.value)} value={userEmail} className='border-2' />    
    <label htmlFor='userPassword'>Password</label>
    <input type="password"  name="userPassword" id='userPassword' onChange={(e)=>setuserPassword(e.target.value)} value={userPassword} className='border-2 ' />
 <button type="submit" onClick={handleSubmit} >sumbit</button>
   
</form>



 
    
   
 
 
</>
  )}
 
export default LoginForm
