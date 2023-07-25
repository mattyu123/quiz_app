const express = require('express');
const router = express.Router();
const database  = require('../db/queries/quiz.js');
// const database = require("../db/connection.js")

//When user clicks on create button, render the entire create quiz page
router.get('/create', (req, res) => {
  res.render('createQuiz')
})

//Server receives the request from browser
router.post('/create', (req, res) => {
  const body = req.body
  const newObj = {}

  //turn the string "true" into a boolean before sending it to the database, data stored in newObj
  for (const item in body) {
    if(body[item] === "true") {
      newObj[item] = (body.private === 'true')
    } else {
      newObj[item] = body[item]
    }
  }

  //run the insertQuiz function on the database object
  database
    .insertQuiz(newObj)
    .then(() => {
    })
    .catch((error) => {
      console.log(error)
    });

  //send back to client that the request was successful
  res.sendStatus(200)
})

module.exports = router;
