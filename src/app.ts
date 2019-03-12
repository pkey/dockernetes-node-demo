import express = require("express");

// Create a new express application instance
const app: express.Application = express();
const hostname = process.env.HOSTNAME ? process.env.HOSTNAME : "meh";

app.get("/", function(req, res) {
  res.send("Hello World from " + hostname);
});

app.get("/break", (req, res) => {
  res.send("You f'ed up " + hostname).status(500);
  process.exit();
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
