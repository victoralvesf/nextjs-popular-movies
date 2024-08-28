import { MovieGrid } from "@/components/movie/MovieGrid"
import { getPopularMovies } from "@/service/getPopularMovies"

export async function Movies() {
  const { results } = await getPopularMovies()

  return (
    <MovieGrid movies={results} />
  )
}