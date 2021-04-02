const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipientSchema = require("./Recipient"); //subdocument collection

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: {
    type: [RecipientSchema], //subarray
  },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: {
    //relationship fields
    type: Schema.Types.ObjectId,
    ref: "User", //reference we make belongs to "User" collection
  },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
