const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;
// console.log(process.env.PORT);
app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));
