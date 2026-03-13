import Router from "express";
// import createMoviesEmbeddings from "../controllers/createMoviesEmbeddings.js";
import semanticSearchMovies from "../controllers/semanticSearchMovies.js";
const router = Router();
// router.post("/embeddings/movies", createMoviesEmbeddings);
router.post("/search/movies", semanticSearchMovies);

export default router;
