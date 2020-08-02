// todo: search input text control
// todo: master-detail
// todo: material design
// todo: edge case - desabilitar navegacion al llegar ultima pagina (y viceversa)
// todo: edge case - no hay resultados de busqueda

import { useRouter } from 'next/router'
import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


const GET_MOVIES = gql`
  query AllMovies($searchterm: String!, $page: Int) {
    allMovies(search: $searchterm, page: $page) {
      results{
        title
        posterPath
        releaseDate
      }
    }
  }
`

const GET_TOTAL_RESULT = gql`
  query {
    allMovies{
      totalResults
    }
  }
`

const Page = () => {

  const router = useRouter()
  const { searchterm, page } = router.query as {searchterm: string, page: string}

  const getPageNumber = (page: string): number => !page ? 1 : parseInt(page as string, 10)
  const goNextPage = () => router.push(`/movies-search/${searchterm}?page=${getPageNumber(page) + 1}`)
  const goPreviousPage = () => router.push(`/movies-search/${searchterm}?page=${getPageNumber(page) - 1}`)

  console.log('router query obj', router.query)

  const { loading, error, data, fetchMore } = useQuery(GET_MOVIES, {
    variables: {searchterm, page: getPageNumber(page)},
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>Loading...</div>
  if (error) return `Error: ${error.message}`

  if (data) {
    return (
      <div>
        {
          data.allMovies.results.map((movie, index) => {
            return (
              <p key={index}>
                <code>{JSON.stringify(movie)}</code>
              </p>
            )
          })
        }
        <p>
          <button onClick={goPreviousPage}>Previous</button>
          <button onClick={goNextPage}>Next</button>
        </p>
        <p>
          <a href="https://tmdb-graphql.com/" target="_blank">
            https://tmdb-graphql.com
          </a>
        </p>
      </div>
    );
  }

}

export default withApollo({ ssr: true })(Page)
