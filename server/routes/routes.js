import Router from "express";
<<<<<<< HEAD
import { signupUser } from "../controllers/user/newUser.js";
import authenticateToken from "../middelware/authenticate.js";

import createMoviesEmbeddings from "../controllers/createMoviesEmbeddings.js";
import semanticSearchMovies from "../controllers/semanticSearchMovies.js";
import askHobbiesAi from "../controllers/askHobbiesAi.js";
import { loginUser } from "../controllers/user/loginUser.js";
import { refreshToken } from "../controllers/user/refreshToken.js";
import { getUser } from "../controllers/user/user.js";
import { getHomePage } from "../controllers/getHomePage.js";

const router = Router();
router.post("/users/signupuser", signupUser);
router.post("/users/loginuser", loginUser);
router.post("/embeddings/movies", authenticateToken, createMoviesEmbeddings);
router.post("/search/movies", authenticateToken, semanticSearchMovies);
router.post("/askai/hobbies", authenticateToken, askHobbiesAi);
router.get("/auth/refreshtoken", refreshToken);
router.get("/user", authenticateToken, getUser);
router.get("/home", authenticateToken, getHomePage);
// router.post("/todolist/create", createTodoList);
// router.get("/todolist/get", getTodoList);
// // router.post("/todolist/update", updateTodoList);
// router.delete("/todolist/delete", deleteTodoList);
=======
import { createNewUser } from "../controllers/newUser.js";
import createMoviesEmbeddings from "../controllers/createMoviesEmbeddings.js";
import semanticSearchMovies from "../controllers/semanticSearchMovies.js";
import askHobbiesAi from "../controllers/askHobbiesAi.js";

const router = Router();
router.post("/createnewuser", createNewUser);
router.post("/embeddings/movies", createMoviesEmbeddings);
router.post("/search/movies", semanticSearchMovies);
router.post("/askai/hobbies", askHobbiesAi);
>>>>>>> 523329b4c5df691430fe2148b015680541ab1d00

export default router;
