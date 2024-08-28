import Image from "next/image"
import { Movie } from "@/types/movie"
import { getMovieImage } from "@/utils/getMovieImage"
import { convertVoteToPercent, formatMovieGenres, getYearByReleaseDate } from "@/utils/movieFormatters"

interface MovieCardProps {
  movie: Movie
  onClick: () => void
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  const { title, overview, release_date, poster_path, genre_ids, vote_average } = movie

  return (
    <div>
      <div onClick={onClick} className="w-full group relative rounded-md overflow-hidden cursor-pointer">
        <Image
          className="w-full aspect-square object-cover"
          src={getMovieImage(poster_path)}
          alt={`${title} poster image`}
          width={500}
          height={750}
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center select-none">
          <span className="text-slate-50">View more</span>
        </div>
      </div>
      
      <div className="mb-4 mt-2 cursor-default">
        <div className="flex gap-2 items-center line-clamp-1">
          <h2 className="font-bold text-foreground truncate cursor-pointer hover:underline" onClick={onClick}>
            {title}
          </h2>
          <span className="text-muted">
            ({getYearByReleaseDate(release_date)})
          </span>
        </div>
        
        <span className="text-info text-sm">
          {formatMovieGenres(genre_ids)} {'•'} {convertVoteToPercent(vote_average)}
        </span>
        
        <p className="text-sm text-muted line-clamp-2 mt-2">{overview}</p>
      </div>
    </div>
  )
}