import { CardActionButton, CardMedia } from '@rmwc/card'
import { CONST } from '../constants'
import { Typography } from '@rmwc/typography'
import css from '../public/styles.module.css'
import slug from 'slug'

const getImageUrl = (baseUrl: string, imgSize: string, posterPath: string): string => {
  if (!posterPath) return ''
  return `${baseUrl}${imgSize}${posterPath}`
}

const getVideoUrl = (videoId: string) => `${CONST.YOUTUBE_VID_URL}${videoId}`

interface MovieImgProps {
  data: {
    id: string,
    title: string,
    posterPath: string,
    baseUrl: string,
    posterSizes: string[]
  }
}

export const MovieImage = ({ data: {id, title, baseUrl, posterPath, posterSizes} }: MovieImgProps) => (
  posterPath &&
    <CardMedia
      square
      onClick={() => onClickMovieDetail({ id, title })}
      style={{backgroundImage: `url(${getImageUrl(baseUrl, posterSizes[2], posterPath)})`}}
    />
)

interface YouTubeBtnProp {
  videoId: string
}

export const YouTubeVideoButton = ({ videoId }: YouTubeBtnProp) => (
  (videoId?.length > 0) &&
    <a href={getVideoUrl(videoId)} target="_blank" rel="noopener">
      <CardActionButton raised>Watch Video</CardActionButton>
    </a>
)

export const onAddFavorite = () => {
  alert(CONST.ADD_FAVORITES_MSG)
}

interface RevenueProps {
  revenue: string | number
}

export const MovieRevenue = ({ revenue }: RevenueProps) => (
  (revenue > 0) &&
    <Typography
      use="subtitle2"
      tag="h3"
      theme="textSecondaryOnBackground"
      className={css.movieCardSubtitle}>Revenue: { revenue } $</Typography>
)

export const onClickMovieDetail = ({id, title}: {id: string, title: string}): void => {
  const sluggedTitle = slug(title)
  window.open(`${CONST.MOVIEDB_DETAIL_BASE_URL}/${id}-${sluggedTitle}`)
}
