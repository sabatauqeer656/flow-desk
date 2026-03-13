// Movies model Schema for storing movies
import mongoose from "mongoose";
const moviesSchema = new mongoose.Schema({
  adult: { type: String, required: true },

  original_language: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  popularity: { type: Number, required: true },
  poster_path: { type: String, required: true },
  release_date: { type: String, required: true },
  title: { type: String, required: true },
  vote_average: { type: Number, required: true },
  genre: { type: Array, required: true },
  embedding: { type: Array, required: true },
});
const Movies = mongoose.model("Movies", moviesSchema);
export default Movies;
