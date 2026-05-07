import HobbiesButton from "../components/home/HobbiesButton"
import MoviesButton from "../components/home/MoviesButton.jsx"
// import MusicButton from "../components/home/MusicButton"
// import StudiesButton from "../components/home/StudiesButton"
// import TodolistButton from "../components/home/TodolistButton"
// import WelcomeButton from "../components/home/WelcomeButton"

import Navbar from "../components/layout/Navbar.jsx"



export default function HomePage() {
  return (<>
  <Navbar/>
  <MoviesButton/>
   <HobbiesButton/>
    
  </>
  )
}
