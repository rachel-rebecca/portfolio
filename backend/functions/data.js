const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    name: String, 
    number: Number, 
    email: String, 
    date: String, 
    time: String, 
    timeZone: String, 
    comments: String,
    // message: String
  },
  // { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);