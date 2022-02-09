const express = require("express");
const { graphqlExpress } = require("apollo-server-express")
import { makeExecutableSchema } from "graphql-tools";
import redis from "redis";
import bluebird from "bluebird";
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.urlencoded({ extended: true }));
app.use("/graphql", express.json(), graphqlExpress({ schema: mySchema }));

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});