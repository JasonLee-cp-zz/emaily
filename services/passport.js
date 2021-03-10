const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //get the previously storeed "users" in mongoose. NO direct export / require

passport.serializeUser((user, done) => {
  //generate cookie

  done(null, user.id); //the reaons we're not using profile.id is that it might use facebook or etc //here id means _id
});

//here id-> user.id in serializeUser
//returning id to mongoose instance
passport.deserializeUser((id, done) => {
  console.log(id);
  User.findById(id).then((user) => {
    console.log(user);
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //user redirected to this route after granting permission from google
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            //we already have a record with the given profile ID
            done(null, existingUser); //two arguments -> (err,user)
          } else {
            //this is a NEW user -> make a new record
            new User({ googleId: profile.id })
              .save()
              .then((user) => done(null, user));
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log("access token:", accessToken);
      // console.log("refresh Token:", refreshToken);
      // console.log("profile:", profile);
    }
  )
);
