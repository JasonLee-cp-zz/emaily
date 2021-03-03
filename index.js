const express = require("express");
const app = express();

const route = express.Router();

route.route("/").get((req, res) => {
  res.json({ name: "Jason" });
});

const PORT = process.env.PORT || 5000;
console.log(process.env);
app.listen(PORT);
