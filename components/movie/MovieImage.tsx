import { CardMedia } from '@rmwc/card'
import { getImageUrl, onClickMovieDetail } from '../../services/movie.service'

interface MovieImgProps {
  data: {
    movieId: string
    title: string
    posterPath: string
    baseUrl: string
    posterSizes: string[]
  }
}

export const MovieImage = ({
  data: { movieId, title, baseUrl, posterPath, posterSizes },
}: MovieImgProps) =>
  posterPath && (
    <CardMedia
      square
      onClick={() => onClickMovieDetail(movieId, title)}
      style={{
        backgroundImage: `url(${getImageUrl(
          baseUrl,
          posterSizes[2],
          posterPath
        )})`,
      }}
    />
  )
