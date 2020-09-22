import Link from 'next/link'
import {
  ListItem,
  ListItemMeta,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText
} from '@rmwc/list'
import styles from '../../public/styles.module.css'

export const MovieListItem = ({ movieData, baseUrl, imgSize }) => {

  const { posterPath, id, title, releaseDate, revenue, originalLanguage, popularity } = movieData

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
        <img loading="lazy" src={getImageUrl(posterPath)} className={styles.listItemImg} alt=""/>
        <ListItemText>
          <ListItemPrimaryText>{ title }</ListItemPrimaryText>
          <ListItemSecondaryText>Popularity: { popularity } %</ListItemSecondaryText>
        </ListItemText>
        <ListItemMeta icon="chevron_right" />
      </ListItem>
    </Link>
  )
}
