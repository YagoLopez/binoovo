import { CardMedia } from '@rmwc/card'
import { getImageUrl, onClickMovieDetail } from '../../services/movie.service'

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