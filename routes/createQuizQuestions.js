const express = require('express');
const router = express.Router();
const database  = require('../db/queries/quiz.js');

//after the user clicks on the create quiz button, render user so they can add questions
router.get('/questions', (req, res)=> {
  res.render('quizQuestions')
})

//Set this route so the server has access to the data
//manipualte the req.body data so that it can send it to the database
router.post('/questions', (req, res) => {
  //get the id of the quiz that was just created
  database
    .pullLastQuizID()
    .then((quizID) => {
      data = quizID;
    })
    .catch((error) => {
      console.log(error)
    })


  //manipulate the id object so we just get the number
  console.log(data)

  const id = data.id
  console.log("Now it's outside and I get just the number", id)

  //THIS CODE BELOW CHANGES OBJECT OF ARRAYS TO ARRAY OF OBJECTS, ADJUST
  let questions = [];

  const length = req.body.question.length;

  for (let i = 0; i < length; i++) {
    let q = {
      'question':req.body['question'][i],
      'option_1':req.body['option_1'][i],
      'option_2':req.body['option_2'][i],
      'option_3':req.body['option_3'][i],
      'option_4':req.body['option_4'][i]
    }
    questions.push(q)
  }

  console.log(questions)
})

module.exports = router;
