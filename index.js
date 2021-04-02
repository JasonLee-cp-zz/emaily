//TODO: express
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session"); //npm install cookie-session
const passport = require("passport"); //to tell passport to make use of cookieSession'
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/Survey");

require("./services/passport"); //nothing to export, we're just using passport

mongoose
  .connect(keys.mongoURL, {
    //이건 그냥외우고 배끼삼 ㅇㅇ
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

//Body Parser
app.use(bodyParser.json());

app.use(
  cookieSession({
    //30 days
    maxAge: 30 * 24 * 60 * 60 * 1000, //how long can the cookie survive before it expires
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); //returns a function!!
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //1) Express will serve up production assets like our main.js file, or main.css file
  app.use(express.static("client/build"));
  //2) Express will serve up index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));
