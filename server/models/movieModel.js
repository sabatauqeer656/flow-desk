// Movies model Schema for storing movies
import mongoose from "mongoose";
const moviesSchema = new mongoose.Schema({});
const Movies = mongoose.model("Movies", moviesSchema);
export default Movies;
