const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");

const app = express();
import typeDefs from "./schema";
import resolvers from "./resolvers";

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
  res.json({ data: "api working" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`server running on port`);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});