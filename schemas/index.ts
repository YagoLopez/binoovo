import {gql} from "apollo-boost";

export const GET_MOVIES = gql`
  query AllMovies($searchterm: String!, $page: Int) {
    allMovies(search: $searchterm, page: $page) {
      results {
        id
        title
        posterPath
        popularity
      }
      page
      totalPages
    }
    configuration {
      images {
        baseUrl
        posterSizes
      }
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
      popularity
      videos {
        key
      }
    }
    configuration {
      images {
        baseUrl
        posterSizes
      }
    }
  }
`
