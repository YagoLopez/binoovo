import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`

  type Query {
    allMovies{
      totalPages
    }
  }
    
`

const resolvers = {
  Query: {
    results: () => {
      debugger
      console.log('all movies')
    }
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {}
})

export const config = {
  api: {bodyParser: false}
}

export default apolloServer.createHandler({path: 'https://tmdb-graphql.com/'})