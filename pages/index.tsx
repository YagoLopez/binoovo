import React, {ChangeEvent, FormEvent, useState} from 'react'
import { useRouter } from 'next/router'

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
      <label>
        <p>Type text to search a movie:</p>
        <input
          type="text"
          value={searchterm}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setSearchterm(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}