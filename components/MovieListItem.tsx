import Link from 'next/link'

export const MovieListItem = ({ movieData, baseUrl, imgSize }) => {
  console.log('movie image', baseUrl + imgSize + movieData.posterPath)
  return (
    <p>
      <Link href="/movie/[id]" as={`/movie/${movieData.id}`}>
        <code>{JSON.stringify(movieData)}</code>
      </Link>
    </p>
  )
}
