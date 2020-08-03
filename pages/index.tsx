import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import {TopBar} from "../components/TopBar";
import { CONST } from "../constants";

export default () => {

  const router = useRouter()

  const [searchterm, setSearchterm] = useState('')

  const onSearchMovie = (evt: FormEvent) => {
    evt.preventDefault()
    searchterm.trim()
    searchterm?.length > 0 && router.push(`/movies-search/${searchterm}?page=1`)
  }

  return (
    <form onSubmit={onSearchMovie}>
      <TopBar title={'Binoovo Movies Search'} />
      <label>
        <div>
          <div>Search movie:</div>
          <div>(for example: "Alien")</div>
        </div>
        <input
          type="text"
          value={searchterm}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setSearchterm(e.target.value)}
          placeholder={CONST.SEARCH_MOVIE_PLACEHOLDER}
        />
      </label>
      <input type="submit" value="Submit" />
      <div>
        <div>This app uses "The Movie Database GraphQL API":</div>
        <a href="https://tmdb-graphql.com/" target="_blank">https://tmdb-graphql.com</a>
      </div>
    </form>
  )
}