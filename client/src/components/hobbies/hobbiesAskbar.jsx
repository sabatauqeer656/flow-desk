
import {findHobbies} from "../../services/api.js"
import { useState  } from 'react'



 function AskHobbiesBar () {
  const [askHobbiesInput, setaskHobbiesInput] = useState(" ")
  const [hobbiesResult, sethobbiesResult] = useState(" ")
  const [isHobbies, setisHobbies] = useState(true)
  const handleSubmit = async(e)=>{
    
    
    e.preventDefault()
   let data = await findHobbies(askHobbiesInput, sethobbiesResult, setisHobbies)
setisHobbies(true)

  
  }
  
  

  

  return (
    <>
<form >   
    <label htmlFor='askHobbiesBar'>ask ai for new hobbies </label>
    
        <input type="text"  name="askHobbiesBar" id='askHobbiesBar' onChange={(e)=>setaskHobbiesInput(e.target.value)} value={askHobbiesInput} className='border-2' />
        <button type="submit" onClick={handleSubmit} >Search</button>
   
</form>




   {isHobbies ? <div>
    {hobbiesResult}
   </div>
    :<p>please try again later</p>}
  
  </>
  )
}
 
export default AskHobbiesBar