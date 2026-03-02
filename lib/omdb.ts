import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";

export async function getMovieById(imdbId: string) {
  const response = await axios.get(BASE_URL, {
    params: {
      i: imdbId,
      apikey: process.env.OMDB_API_KEY,
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data;
}