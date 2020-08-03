import Link from 'next/link'
import {
  ListItem,
  ListItemMeta,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText
} from '@rmwc/list'
import styles from '../public/styles.module.css'

export const MovieListItem = ({ movieData, baseUrl, imgSize }) => {

  const getImageUrl = (posterPath: string): string => {
    if (!posterPath) return '/imgFail.jpg'
    return baseUrl + imgSize + movieData.posterPath
  }

  const getReleaseDate = (releaseDate: string): string => {
    if (!releaseDate) return 'Release date not available'
    return 'Release date: ' + releaseDate
  }

  return (
    <Link href="/movie/[id]" as={`/movie/${movieData.id}`}>
      <ListItem>
      <img src={getImageUrl(movieData.posterPath)} className={styles.listItemImg} alt=""/>
      <ListItemText>
        <ListItemPrimaryText>
          { movieData.title }
        </ListItemPrimaryText>
        <ListItemSecondaryText>
          { getReleaseDate(movieData.releaseDate) }
        </ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta icon="chevron_right" />
    </ListItem>
    </Link>
  )
}
