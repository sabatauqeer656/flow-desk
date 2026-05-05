// Fetch data from TMDB api endpoints
// Add a new genre property in movie object
// Create embeddings using VoyageAI (voyage-4-large)
// Store  embeddings in Mongodb Atlas database in embeddings field
import Movies from "../models/movieModel.js";
import { VoyageAIClient } from "voyageai";

function createMoviesEmbeddings(req, res) {
  const client = new VoyageAIClient();
  async function getTmdbMovies() {
    try {
      let movies;
      let genres;

      // TMDB get genre list endpoint configuration
      const genreoptions = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      };

      const genreRes = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        genreoptions,
      );
      // Setting up genres array
      const genreData = await genreRes.json();
      genres = genreData.genres;
      console.log("genres", genres);
      // TMDB get movies list endpoint configuration
      const moviesoptions = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFhNGM3MzUxYWMzN2FlMDM0ZjliZTZlNTAxODFjZSIsIm5iZiI6MTc3Mjc0NjM0Ni4wMjQsInN1YiI6IjY5YTlmNjZhN2EzYTUxZDc3NjdiMDI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MksgPMN3o7mzJPCtzj-P04Ht15wF1ZodtUPW2nc0qBk",
        },
      };

      const moviesRes = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        moviesoptions,
      );
      // Setting up movies array
      movies = await moviesRes.json();
      console.log("movies", movies);

      // Looping over movies array to get single movie object
      for (let i = 0; i < movies.results.length; i++) {
        const movieGenre = [];
        const movie = movies.results[i];
        // Looping over moives genre_ids to  find similar id.name from genres array
        for (let g = 0; g < movie.genre_ids.length; g++) {
          const id = movie.genre_ids[g];
          const genre = genres.find((f) => f.id === id);

          if (genre) {
            movieGenre.push(genre.name);
          }
        }
        // Setting new property genre in movie object that has genre:[id.name] stored in movieGenre
        movie.genre = movieGenre;
        // Movie embedding by voyage -4-large
        const embeddingresult = await client.embed({
          input: [JSON.stringify(movie)],
          model: "voyage-4-large",
        });
        const moviesDoc = Movies.create({
          ...movie,
          embedding: embeddingresult.data[0].embedding,
        });
        console.log(embeddingresult);

        console.log("single movie ", movie);
      }
      res.status(200).json({
        success: true,
        message: " embeddded movies saved to db ",
      });
    } catch (error) {
      res.status(505).json({ success: false, message: error.message });
    }
  }

  getTmdbMovies();
}

export default createMoviesEmbeddings;
