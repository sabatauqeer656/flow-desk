// Convert semantic query to embeddings using VoyageAI (voyage-4-large)
// Search in Mongodb Atlas using query embedding

import Movies from "../models/movieModel.js";

import { VoyageAIClient } from "voyageai";

async function semanticSearchMovies(req, res) {
  const { semanticQuery } = req.body;
  const client = new VoyageAIClient();
  // Generate embedding for the  user query
  try {
    const QueryResult = await client.embed({
      input: [semanticQuery],
      model: "voyage-4-large",
    });
    console.log("query embeddings created");
    // Retrieve semantically similar results using vector search
    const semanticResultMovies = await Movies.aggregate([
      {
        $vectorSearch: {
          exact: true,
          index: "vector_index",
          limit: 5,
          path: "embeddings",
          queryVector: QueryResult.data[0].embedding,
        },
      },
    ]);
    console.log("semantic results movies:", semanticResultMovies);

    res.status(200).json({
      success: true,
      message: "found these results",
      data: semanticResultMovies,
    });
  } catch (error) {
    res.status(505).json({
      success: false,
      message: `error:${error.message}`,
    });
  }
}

export default semanticSearchMovies;
