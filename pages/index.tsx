import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { TopBar } from '../components/TopBar'
import { CONST } from '../constants';
import { LinearProgress } from '@rmwc/linear-progress'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import css from '../public/styles.module.css'
import PageHead from '../components/PageHead'

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
    <>
      <PageHead title="Binoovo Movie Search" />
      <TopBar title={CONST.TITLE} />
      { isLoading && <LinearProgress /> }
      <form onSubmit={onSearchMovie}>
        <main className={css.centerHor}>
          <label>
            <div className={css.blockText}>
              <div><Typography use="headline6">🎞️ Search Movie</Typography></div>
              <div><Typography use="body1">For example: "Contact"</Typography></div>
            </div>
            <TextField
              icon="search"
              value={searchterm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchterm(e.target.value)}
              label={CONST.SEARCH_MOVIE_PLACEHOLDER}
              trailingIcon={{icon: 'close', tabIndex: 0, onClick: () => setSearchterm('')}}
            />
            <div className={css.submitBtn}>
              <Button label="Search" theme={['secondaryBg', 'onSecondary']} raised type="submit"/>
            </div>
          </label>
          <div className={css.blockText}>
            <div>
              <Typography use="caption">This app uses "The Movie Database GraphQL API":</Typography>
            </div>
            <div>
              <a href="https://tmdb-graphql.com/" target="_blank" className={css.link} rel="noopener">
                https://tmdb-graphql.com
              </a>
            </div>
            <p>
              <Typography use="caption">Developed by Yago López</Typography>
            </p>
          </div>
        </main>
      </form>
    </>
  )
}