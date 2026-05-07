
import {searchMovies} from '../../services/api.js'
import { useState  } from 'react'



 function SearchBar () {
  const [searchMovieInput, setsearchMovieInput] = useState(" ")
  const [moviesResult, setmoviesResult] = useState([])
  const [isMovies, setisMovies] = useState(true)
  const handleSubmit = async(e)=>{
    
    
    e.preventDefault()
   let data = await searchMovies(searchMovieInput, setmoviesResult ,setisMovies)
setisMovies(true)

  
  }
  
  

  

  return (
    <>
<form >   
    <label htmlFor='searchMoviesBar'>Search Movies</label>
    
        <input type="text"  name="searchMoviesBar" id='searchMoviesBar' onChange={(e)=>setsearchMovieInput(e.target.value)} value={searchMovieInput} className='border-2' />
        <button type="submit" onClick={handleSubmit} >Search</button>
   
</form>




  {isMovies ? moviesResult.map((movie)=>{return (

   <div key={movie._id} className='text-left'>
    <h1>title : {movie.original_title}</h1>
      <h1>genre : {movie.genre}</h1>
      <h1>synopsis :{movie.overview}</h1>
      <h1>release date : {movie.release_date}</h1>
    
      
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={ `movie poster :${ movie.original_title}`} className='h-96'/>
  </div>
    
   
  )}):<p>no movies found</p>}

  
  </>
  )}
 
export default SearchBar