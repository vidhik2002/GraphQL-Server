const express = require("express");
const { graphqlExpress } = require("apollo-server-express")
// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.urlencoded({ extended: true }));
app.use("/graphql", express.json(), graphqlExpress({ schema: mySchema }));

app.listen(process.env.PORT, () => {
  console.log("listening");
});