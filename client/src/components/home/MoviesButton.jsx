import React from "react"
import {useNavigate} from "react-router-dom"

function MoviesButton() {
 const navigate = useNavigate()
  const moviesPage= ()=>{
    navigate("/api/flowdesk/moviesreccomender")
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
hover:scale-105 m-10"   onClick={moviesPage}>Movies Recommender</button>  

  </div>
 ) 


}

export default MoviesButton