import axios from "axios";
const baseUrl = "http://localhost:3000/api/flowdesk";
const searchMovies = async (searchMoviesBar, setmoviesResult, setisMovies) => {
  console.log(searchMoviesBar, "movies searched");

  let res = await axios.post(`${baseUrl}/search/movies`, {
    semanticQuery: searchMoviesBar,
  });

  if (!res) {
    setisMovies(false);
  }

  setmoviesResult(res.data.data);
};
export default searchMovies;
