import Link from 'next/link'
import {
  ListItem,
  ListItemMeta,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@rmwc/list'
import Image from 'next/image'
import { LAZY_IMG_STYLE } from '../../public/styles/lazy-img-style'

export const MovieListItem = ({ movieData, baseUrl, imgSize }) => {
  const {
    posterPath,
    id,
    title,
    releaseDate,
    revenue,
    originalLanguage,
    popularity,
  } = movieData

  const getImageUrl = (posterPath: string): string => {
    if (!posterPath) return '/imgFail.jpg'
    return baseUrl + imgSize + posterPath
  }

  const getReleaseDate = (releaseDate: string): string => {
    if (!releaseDate) return 'Release date not available'
    return 'Release date: ' + releaseDate
  }

  return (
    <Link href="/movie/[id]" as={`/movie/${id}`}>
      <ListItem>
        <div style={LAZY_IMG_STYLE}>
          <Image
            src={getImageUrl(posterPath)}
            width="92"
            height="92"
            alt="Profile Picture"
          />
        </div>
        <ListItemText>
          <ListItemPrimaryText>{title}</ListItemPrimaryText>
          <ListItemSecondaryText>
            Popularity: {popularity} %
          </ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta icon="chevron_right" />
      </ListItem>
    </Link>
  )
}
