const express = require('express');
const router = express.Router();

//When user clicks on create button, render the entire create quiz page
router.get('/create', (req, res) => {
  res.render('createQuiz')
})

//send the quiz data to the server
router.post('/create', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router;
