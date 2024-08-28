import { MovieResponse } from "@/types/movie"

export async function getPopularMovies() {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
  })
  return await response.json() as MovieResponse
}