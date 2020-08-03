import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { TopBar } from '../components/TopBar'
import { CONST } from '../constants';
import { LinearProgress } from '@rmwc/linear-progress'
import styles from '../public/styles.module.css'
import { Typography } from '@rmwc/typography'

export default () => {

  const router = useRouter()
  const [searchterm, setSearchterm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSearchMovie = (evt: FormEvent) => {
    evt.preventDefault()
    searchterm.trim()
    if (searchterm?.length > 0) {
      setIsLoading(true)
      router.push(`/movies-search/${searchterm}?page=1`)
    }
  }

  return (
    <form onSubmit={onSearchMovie}>
      <TopBar title={'Binoovo Movie Search'} />
      { isLoading && <LinearProgress /> }
      <section className={styles.centerHor}>
        <label>
          <div className={styles.blockText}>
            <div><Typography use="headline6">🔎 Search Movie</Typography></div>
            <div><Typography use="body1">For example: "Alien"</Typography></div>
          </div>
          <input
            type="text"
            value={searchterm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchterm(e.target.value)}
            placeholder={CONST.SEARCH_MOVIE_PLACEHOLDER}
          />
        </label>
        <input type="submit" value="Submit"/>
        <div className={styles.blockText}>
          <div>
            <Typography use="caption">This app uses "The Movie Database GraphQL API":</Typography>
          </div>
          <p>
            <a href="https://tmdb-graphql.com/" target="_blank">https://tmdb-graphql.com</a>
          </p>
        </div>
      </section>
    </form>
  )
}