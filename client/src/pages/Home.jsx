import Todolist from '../components/home/Todolist'
import Hobbies from '../components/home/Hobbies'
import Music from '../components/home/Music'
import Series from '../components/home/Series'
import Studies from '../components/home/Studies'
import Navbar from '../components/layout/Navbar.jsx'
import Welcome from '../components/home/Welcome.jsx'


export default function Home() {
  return (<>
  <Navbar/>
    <Welcome />
    <div class = 'grid h-56 grid-cols-3 place-items-center gap-6 mt-30 '>

      <Todolist />
      <Hobbies />
      <Music />
      <Series />
      <Studies /> 
      
    </div>
  </>
  )
}
