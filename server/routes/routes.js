import Router from "express";
import { createNewUser } from "../controllers/newUser.js";
import createMoviesEmbeddings from "../controllers/createMoviesEmbeddings.js";
import semanticSearchMovies from "../controllers/semanticSearchMovies.js";
import askHobbiesAi from "../controllers/askHobbiesAi.js";

const router = Router();
router.post("/createnewuser", createNewUser);
router.post("/embeddings/movies", createMoviesEmbeddings);
router.post("/search/movies", semanticSearchMovies);
router.post("/askai/hobbies", askHobbiesAi);

export default router;
