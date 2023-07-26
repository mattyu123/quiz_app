const express = require('express');
const router = express.Router();
const database  = require('../db/queries/quiz.js');

//after the user clicks on the create quiz button, render user so they can add questions
router.get('/questions', (req, res)=> {
  res.render('quizQuestions', {quizID: 1})
})

//Set this route so the server has access to the data
//manipualte the req.body data so that it can send it to the database
router.post('/questions', (req, res) => {
  console.log("this",req.body)

  //THIS CODE BELOW CHANGES OBJECT OF ARRAYS TO ARRAY OF OBJECTS, ADJUST
  // let questions = [];

  // const length = req.body.question.length;

  // for (let i = 0; i < length; i++) {
  //   let q = {
  //     'question':req.body['question'][i],
  //     'option_1':req.body['option-A'][i],
  //     'option_2':req.body['option-B'][i],
  //     'option_3':req.body['option-C'][i],
  //     'option_4':req.body['option-D'][i]
  //   }
  //   questions.push(q)
  // }

  // console.log(questions)
})

module.exports = router;
