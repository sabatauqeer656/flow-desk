import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/flowdesk",
  timeout: 5000,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const original = error.config;

    if (error.response.status === 401 && !original._retry) {
      original._retry = true;

      await apiClient.get("/auth/refreshtoken");

      return apiClient(original);
    }

    return Promise.reject(error);
  },
);

export const searchMovies = async (
  searchMoviesBar,
  setmoviesResult,
  setisMovies,
) => {
  console.log(searchMoviesBar, "movies searched");

  let res = await apiClient.post(`/search/movies`, {
    semanticQuery: searchMoviesBar,
  });
  console.log("movies frontend point");

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

  let res = await apiClient.post(`/askai/hobbies`, {
    hobbiesInquiry: askHobbiesInput,
  });

  if (!res) {
    setisHobbies(false);
  }

  sethobbiesResult(res.data.data);
};

export const signupUser = async (
  userEmail,
  username,
  userPassword,
  setisSignedup,
  setisAlreadyUser,
  setisEmptyFields,
  setisError,
  setusername,
  setuserPassword,
  setuserEmail,
) => {
  const res = await apiClient.post(`/users/signupuser`, {
    newUserEmail: userEmail,
    plainPassword: userPassword,
    newUsername: username,
  });

  setisSignedup(true);
};

export const loginUser = async (
  userEmail,

  userPassword,
) => {
  const res = await apiClient
    .post(
      `/users/loginuser`,

      {
        userEmail: userEmail,
        userPassword: userPassword,
      },
    )
    .then((res) => {
      console.log(res);
    });
};

export const getHomePage = async () => {
  const res = await apiClient.get(`/home`).then((res) => {
    console.log(res);
  });
};
