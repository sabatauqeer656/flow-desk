
  function HobbiesButton() {
  const navigate = useNavigate()
  const hobbiesPage= ()=>{
    navigate("/api/flowdesk/findnewhobbies")
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
hover:scale-105 m-10"   onClick={hobbiesPage}>find new hobbies</button>  

  </div>
 ) 


  
}
export default HobbiesButton
