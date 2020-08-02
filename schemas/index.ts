import {gql} from "apollo-boost";

export const GET_MOVIES = gql`
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

export const GET_MOVIE = gql`
  query ($id: ID!){
    movie(id: $id) {
      overview
      cast {
        name
      }
      genres {
        name
      }
      posterPath
      releaseDate
      revenue
      title
      videos {
        key
      }
    }
  }
`
