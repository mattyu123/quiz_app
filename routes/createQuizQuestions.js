const express = require('express');
const router = express.Router();
const database  = require('../db/queries/quiz.js');

//after the user clicks on the create quiz button, render user so they can add questions
router.get('/questions', (req, res)=> {
  res.render('quizQuestions')
})

//Set this route so the server has access to the data
router.post('/questions', (req, res) => {
  //get the id of the quiz that was just created
  database
    .pullLastQuizID()
    .then((resultData) => {
      data = resultData;

      //pull the id of the quiz that was just created
      const quiz_id = data.id

      //questions into array to be inserted into questions table
      let questions = [];

      //if the quiz only has 1 question
      if (typeof req.body.question === "string"){
        questions.push(req.body);
      } else {
        for (let i = 0; i < req.body.question.length; i++) {
          let q = {
            'question':req.body['question'][i],
            'option_1':req.body['option_1'][i],
            'option_2':req.body['option_2'][i],
            'option_3':req.body['option_3'][i],
            'option_4':req.body['option_4'][i]
          }
          questions.push(q);
        }
      }

      //inserting the questions into the questions datatable
      database
        .insertQuestionAnswers(questions, quiz_id)
        .then(() => {
          res.send()
        })
        .catch((error) => {
          console.log(error)
        });
    })
    .catch((error) => {
      console.log(error)
    })


})

module.exports = router;
