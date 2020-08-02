import Link from 'next/link'

export const MovieItem = ({ movieData }) => {

  return (
    <p>
      <Link href="/movie/[id]" as={`/movie/${movieData.id}`}>
        <code>{JSON.stringify(movieData)}</code>
      </Link>
    </p>
  )
}
