import withApollo from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_MOVIES = gql`
  query AllMovies($searchString: String!, $page: Int) {
    allMovies(search: $searchString, page: $page) {
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

  const searchString = "alien"
  const page = 1

  const { loading, error, data, fetchMore } = useQuery(GET_MOVIES, {
    variables: {searchString, page},
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>Loading...</div>;
  if (error) return `Error: ${error.message}`;

  if (data?.allMovies?.results) {
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
          <a href="https://tmdb-graphql.com/" target="_blank">
            https://tmdb-graphql.com
          </a>
        </p>
      </div>
    );
  }

}

export default withApollo({ ssr: true })(Page);