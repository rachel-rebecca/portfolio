const express = require("express");
const { connectToServer } = require("../db/conn");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const Data = require("../data")
 
 
// This will get all the contact requests.
recordRoutes.route("/contactForm").get(function (req, res) {
 let db_connect = dbo.getDb("contactForm");
 db_connect.collection("contactForm").find().toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will create a new contact request.
recordRoutes.route("/contactForm/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let newRequest = {
       name: req.body.name, 
       number: req.body.number, 
       email: req.body.email, 
       date: req.body.date, 
       time: req.body.time, 
       timeZone: req.body.timeZone, 
       comments: req.body.comments
    };
    db_connect.collection("contactForm").insertOne(newRequest, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
 
// This section will help you get a single record by id
// recordRoutes.route("/contactForm/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("contactForm")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 

 
// This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("contactForm")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("contactForm").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = recordRoutes;