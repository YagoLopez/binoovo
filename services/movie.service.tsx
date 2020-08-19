import { CardActionButton, CardMedia } from '@rmwc/card'
import { CONST } from '../constants'
import { Typography } from '@rmwc/typography'
import css from '../public/styles.module.css'
import slug from 'slug'

const getImageUrl = (baseUrl: string, imgSize: string, posterPath: string): string => {
  if (!posterPath) return ''
  return baseUrl + imgSize + posterPath
}

const getVideoUrl = (videoId: string) => `${CONST.YOUTUBE_VID_URL}${videoId}`

export const getCardMedia = (id: string, title: string, posterPath: string, baseUrl: string, posterSizes: string[]) => (
  posterPath &&
    <CardMedia
      square
      onClick={() => onClickMovieDetail({ id, title })}
      style={{backgroundImage: `url(${getImageUrl(baseUrl, posterSizes[2], posterPath)})`}}
    />
)

export interface YouTubeBtnProp {
  videoId: string
}

export const YouTubeVideoButton = ({ videoId }: YouTubeBtnProp) => (
  (videoId.length > 0) &&
    <a href={getVideoUrl(videoId)} target="_blank" rel="noopener">
      <CardActionButton raised>Watch Video</CardActionButton>
    </a>
)

export const onAddFavorite = () => {
  alert(CONST.ADD_FAVORITES_MSG)
}

export const getRevenue = (revenue) => (
  (revenue > 0) &&
    <Typography
      use="subtitle2"
      tag="h3"
      theme="textSecondaryOnBackground"
      className={css.movieCardSubtitle}>Revenue: { revenue } $</Typography>
)

export const onClickMovieDetail = ({ id, title }) => {
  const sluggedTitle = slug(title)
  window.open(`${CONST.MOVIEDB_DETAIL_BASE_URL}/${id}-${sluggedTitle}`)
}