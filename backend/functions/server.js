const express = require('express');
var cors = require('cors');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(require("./routes/record"));
const dbo = require("./db/conn");


app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
