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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //we already have a record with the given profile ID
        return done(null, existingUser); //two arguments -> (err,user)
      }
      //this is a NEW user -> make a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);

      // console.log("access token:", accessToken);
      // console.log("refresh Token:", refreshToken);
      // console.log("profile:", profile);
    }
  )
);
