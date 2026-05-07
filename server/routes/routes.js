import Router from "express";
import createMoviesEmbeddings from "../controllers/createMoviesEmbeddings.js";
import semanticSearchMovies from "../controllers/semanticSearchMovies.js";
import askHobbiesAi from "../controllers/askHobbiesAi.js";
const router = Router();
router.post("/embeddings/movies", createMoviesEmbeddings);
router.post("/search/movies", semanticSearchMovies);
router.post("/askai/hobbies", askHobbiesAi);

export default router;
