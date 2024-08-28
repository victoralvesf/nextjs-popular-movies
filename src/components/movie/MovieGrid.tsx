'use client'

import { useState } from "react"
import { MovieCard } from "@/components/movie/MovieCard"
import { ModalRoot } from "@/components/modal/ModalRoot"
import { MovieDetails } from "@/components/movie/MovieDetails"
import { Movie } from "@/types/movie"

interface MovieGridProps {
  movies: Movie[]
}

export function MovieGrid({ movies }: MovieGridProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [movieIndex, setMovieIndex] = useState<number | null>(null)

  function handleMovieClick(index: number) {
    setMovieIndex(index)
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(index)} />
        ))}
      </div>

      <ModalRoot isOpen={isOpen} onClose={handleCloseModal}>
        {movieIndex !== null && (
          <MovieDetails movie={movies[movieIndex]} />
        )}
      </ModalRoot>
    </>
  )
}