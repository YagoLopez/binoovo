import { CONST } from '../constants'
import slug from 'slug'

export const getImageUrl = (baseUrl: string, imgSize: string, posterPath: string): string => {
  if (!posterPath) return ''
  return `${baseUrl}${imgSize}${posterPath}`
}

export const getVideoUrl = (videoId: string) => `${CONST.YOUTUBE_VID_URL}${videoId}`

export const onAddFavorite = () => {
  alert(CONST.ADD_FAVORITES_MSG)
}

export const onClickMovieDetail = (movieId: string, title: string): void => {
  const strWindowFeatures = 'location=no,height=570,width=800,scrollbars=yes,status=no';
  window.open(getMovieDetailUrl(movieId, title), '_blank', strWindowFeatures)
}

export const getMovieDetailUrl = (movieId: string, title: string): string => {
  const sluggedTitle = slug(title)
  return `${CONST.MOVIEDB_DETAIL_BASE_URL}/${movieId}-${sluggedTitle}`
}

export const openExternalLink = (url: string ): void => {
  window.open(url)
}
