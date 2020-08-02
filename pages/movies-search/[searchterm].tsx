// todo: search input text control
// todo: master-detail
// todo: material design
// todo: create footer navigation component
// todo: extract to external files schemas
// todo: add styles

import { useRouter } from 'next/router'
import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { NoResults } from "../../components/NoResults";

const GET_MOVIES = gql`
  query AllMovies($searchterm: String!, $page: Int) {
    allMovies(search: $searchterm, page: $page) {
      results {
        id
        releaseDate
        title
        posterPath
      }
      page
      totalPages
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
  const getPageNumber = (page: string): number => !page ? 1 : +page

  const goNextPage = (currentPage: string, totalPages: string) => {
    if (!isLastPage(currentPage, totalPages)) {
      router.push(`/movies-search/${searchterm}?page=${getPageNumber(currentPage) + 1}`)
    }
  }

  const goPreviousPage = (currentPage: string) => {
    if (!isFirstPage(currentPage)) {
      router.push(`/movies-search/${searchterm}?page=${getPageNumber(currentPage) - 1}`)
    }
  }

  const isPageNumberInRange = (pageNumber: string, totalPages?: string): boolean => {
    if (pageNumber) {
      if (+pageNumber < 1) return false
      if (totalPages) return +pageNumber <= +totalPages
    }
    return true
  }

  const isFirstPage = (currentPage: string) => +currentPage <= 1 || currentPage === undefined
  const isLastPage = (currentPage: string, totalPages: string) => +currentPage >= +totalPages

  if (!isPageNumberInRange(page)) return <NoResults message={'Page number out of range'}/>

  const { loading, error, data, fetchMore } = useQuery(GET_MOVIES, {
    variables: {searchterm, page: getPageNumber(page)},
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>Loading...</div>
  if (error) return <NoResults message={error.message}/>
  if (data) {
    const { totalPages, page, results } = data.allMovies
    if (!isPageNumberInRange(page, totalPages)) return <NoResults message={'Page number out of range'}/>
    if (totalPages === 0) return <NoResults message={'No results found'}/>
    return (
      <div>
        {
          results.map((movie, index) => {
            return (
              <p key={index}>
                <code>{JSON.stringify(movie)}</code>
              </p>
            )
          })
        }
        <p>
          <button onClick={() => goPreviousPage(page)} disabled={isFirstPage(page)}>
            Previous
          </button>
          <button onClick={() => goNextPage(page, totalPages)} disabled={isLastPage(page, totalPages)}>
            Next
          </button>
        </p>
        <div>
          <div>Current page: { page }</div>
          <div>Total pages: { totalPages }</div>
        </div>
        <p>
          <a href="https://tmdb-graphql.com/" target="_blank">
            https://tmdb-graphql.com
          </a>
        </p>
      </div>
    )
  }
}

export default withApollo({ ssr: true })(Page)
