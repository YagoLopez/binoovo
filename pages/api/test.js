import { ApolloServer } from "apollo-server";
import RecipesResolver from "./resolvers/recipe-resolver";
import {buildSchema} from "type-graphql";

const PORT = process.env.PORT || 4000;

async function bootstrap() {

  // Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [RecipesResolver],
  });

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();