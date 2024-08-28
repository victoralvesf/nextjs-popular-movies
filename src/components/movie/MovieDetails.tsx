import Image from "next/image"
import { Movie } from "@/types/movie"
import { getMovieImage } from "@/utils/getMovieImage"
import { convertVoteToPercent, formatMovieGenres, getYearByReleaseDate } from "@/utils/movieFormatters"

interface MovieDetailsProps {
  movie: Movie
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const { poster_path, title, release_date, genre_ids, vote_average, overview } = movie

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="flex justify-center md:justify-start flex-1">
        <Image
          className="w-full sm:w-2/3 md:w-full aspect-square md:aspect-auto object-cover rounded-md"
          src={getMovieImage(poster_path)}
          alt={`${title} poster image`}
          width={500}
          height={750}
        />
      </div>

      <div className="flex-1 text-left sm:text-center md:text-left">
        <h2 className="font-bold text-foreground text-2xl">{title}</h2>

        <div className="text-info text-sm flex flex-col gap-1 mt-2">
          <p>{getYearByReleaseDate(release_date)} {'•'} {convertVoteToPercent(vote_average)}</p>
          <p>{formatMovieGenres(genre_ids, genre_ids.length)}</p>
        </div>

        <p className="mt-4 text-base text-muted">{overview}</p>
      </div>
    </div>
  )
}