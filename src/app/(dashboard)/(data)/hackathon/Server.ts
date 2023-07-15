import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./schema/resolvers";
import typeDefs from "./schema/typeDefs";

async function Server() {
  console.log("LIFTOFFFF");
  const server = new ApolloServer({ typeDefs, resolvers });
  const url = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server is nominal! at ${url}`);
}

Server();
