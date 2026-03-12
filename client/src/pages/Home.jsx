import Todolist from '../components/home/Todolist'
import Hobbies from '../components/home/Hobbies'
import Music from '../components/home/Music'
import Series from '../components/home/Series'
import Studies from '../components/home/Studies'
import Welcome from '../components/home/Welcome.jsx'


export default function Home() {
  return (<>
    <Welcome />

    <div>

      <Todolist />
      <Hobbies />
      <Music />
      <Series />
      <Studies />

    </div>
  </>
  )
}
