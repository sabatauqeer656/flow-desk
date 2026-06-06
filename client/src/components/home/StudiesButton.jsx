
import React from "react"
import {useNavigate} from "react-router-dom"

function studiesButton () {
 const navigate = useNavigate()
  const studuesTimetablePage= ()=>{
    navigate("/api/flowdesk/studiestimetable")
  }
  return (
    <div>
     
  <button type="button" className=" w-60 h-60 rounded-2xl
bg-slate-600 backdrop-blur-md
border border-zinc-700
flex items-center justify-center
text-zinc-200
shadow-lg
transition duration-300
hover:scale-105 m-10"   onClick={studiesTimetablePage}>studies schedule</button>  

  </div>
 ) 


}

export default studiesButton