import axios from "axios";

const baseUrl = "http://localhost:3000/api/flowdesk";
export const searchMovies = async (
  searchMoviesBar,
  setmoviesResult,
  setisMovies,
) => {
  console.log(searchMoviesBar, "movies searched");

  let res = await axios.post(`${baseUrl}/search/movies`, {
    semanticQuery: searchMoviesBar,
  });

  if (!res) {
    setisMovies(false);
  }

  setmoviesResult(res.data.data);
};

//find hobbies by ai
export const findHobbies = async (
  askHobbiesInput,
  sethobbiesResult,
  setisHobbies,
) => {
  console.log(askHobbiesInput, "movies searched");

  let res = await axios.post(`${baseUrl}/askai/hobbies`, {
    hobbiesInquiry: askHobbiesInput,
  });

  if (!res) {
    setisHobbies(false);
  }

  sethobbiesResult(res.data.data);
};
