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

export const onClickMovieDetail = ({id, title}: {id: string, title: string}): void => {
  const sluggedTitle = slug(title)
  window.open(`${CONST.MOVIEDB_DETAIL_BASE_URL}/${id}-${sluggedTitle}`)
}
