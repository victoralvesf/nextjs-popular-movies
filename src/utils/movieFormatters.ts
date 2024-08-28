import { Genres } from "@/types/genres"

export function getYearByReleaseDate(date: string) {
  return new Date(date).getFullYear()
}

export function formatMovieGenres(ids: number[], amount = 2) {
  return ids.slice(0, amount).map(id => Genres[id]).join(', ')
}

export function convertVoteToPercent(vote: number) {
  const percentValue = vote * 1000 / 100
  return percentValue.toFixed(0) + '%'
}