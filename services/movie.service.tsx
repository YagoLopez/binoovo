import { CardActionButton, CardMedia } from '@rmwc/card'
import { CONST } from '../constants'

const getImageUrl = (baseUrl: string, imgSize: string, posterPath: string): string => {
  if (!posterPath) return ''
  return baseUrl + imgSize + posterPath
}

const getVideoUrl = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`

export const getCardMedia = (posterPath: string, baseUrl: string, posterSizes: string[]) => (
  posterPath &&
    <CardMedia square
      style={{backgroundImage: `url(${getImageUrl(baseUrl, posterSizes[2], posterPath)})`}}
    />
)

export const getVideoBtn = (videos: {key: string, any}[]) => (
  videos.length > 0 &&
    <a href={getVideoUrl(videos[0]?.key)} target="_blank" rel="noopener">
      <CardActionButton raised>Watch Video</CardActionButton>
    </a>
)

export const onAddFavorite = () => {
  alert(CONST.ADD_FAVORITES_MSG)
}