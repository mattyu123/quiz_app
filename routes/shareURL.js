const express = require('express');
const router = express.Router();
const database  = require('../db/queries/quiz.js');

// Route to display the quiz based on its URL
router.get('/quiz/:quizUrl', (req, res) => {
  const { quizUrl } = req.params;

  database.query('SELECT * FROM quizzes WHERE url = $1', [quizUrl])
    .then((result) => {
      const quiz = result.rows[0];
      if (!quiz) {
        return res.status(404).send('Quiz not found.');
      }

      // Fetch questions for the quiz using its ID
      database.query('SELECT * FROM questions WHERE quiz_id = $1', [quiz.id])
        .then((questionsResult) => {
          const questions = questionsResult.rows;
          // Render the quiz page with questions and other quiz details
          res.render('quizAttempt', { quiz, questions });
        })
        .catch((err) => {
          console.log('Error fetching questions:', err);
          res.status(500).send('Internal Server Error');
        });
    })
    .catch((err) => {
      console.log('Error fetching quiz:', err);
      res.status(500).send('Internal Server Error');
    });
});
module.exports = router;