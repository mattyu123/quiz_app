const express = require('express');
const router = express.Router();
const database  = require('../db/queries/quiz.js');

//after the user clicks on the create quiz button, render user so they can add questions
router.get('/questions', (req, res)=> {
  res.render('quizQuestions')
})

router.post('/questions', (req, res) => {
  console.log(req.body)
})

module.exports = router;
