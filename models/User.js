const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: String,
});

mongoose.model("users", userSchema); //no require statement, register to mongoose so that we can use globally (order importatn!!)
