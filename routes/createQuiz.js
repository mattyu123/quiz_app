const express = require('express');
const router = express.Router();
const { insertQuiz } = require('../db/queries/quiz.js');


//When user clicks on create button, render the entire create quiz page
router.get('/create', (req, res) => {
  res.render('createQuiz')
})

//send the quiz data to the server
router.post('/create', (req, res) => {


  const newBody = req.body

  // const empty = {}

  // for (const item in newBody) {
  //   if (item.private === "true") {
  //     empty[item.private] = true;
  //   }
  //   empty[item] = newBody[item]
  // }

  const private = (newBody.private === 'true')
  console.log("HERE", private)

  // const newResults = results.map(item => {
  //   if (item.value === 'true') {
  //     item.value = true;
  //   } else if (item.value === 'false') {
  //     item.value = false;
  //   }
  //   return item;
  // });

  console.log(typeof newBody.value)


  res.sendStatus(200)
})

module.exports = router;
