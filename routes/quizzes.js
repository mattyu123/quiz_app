/*
 * All routes for quizzes are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express = require('express');
const router  = express.Router();


const db = require('../db/connection');

router.get('/create', (req, res) => {
  res.render('createQuiz')
})

router.get('/:id', (req,res) => {
  const userId =  req.params.id;
  res.cookie("userId", userId);

  db.getQuizzesByUserId(userId)
    .then((quizzes) => {
      const templateVars = {quizzes}
      res.render('index', templateVars);
    })
    .catch((err) => {
      res.send(err)
    })
});

// Home page - display all public quizzes
router.get('/', (req, res) => {
  db.query('SELECT * FROM quizzes WHERE is_private = false')
    .then((publicQuizzes) => {
      res.render('index', { quizzes: publicQuizzes.rows });
    })
    .catch((err) => {
      console.error('Error fetching quizzes:', err);
      res.status(500).send('Server Error');
    });
});

// Generating unique URls for quizzes

router.post('/create', (req, res) => {
  const { name, private = "true" } = req.body;
  // const quizId = Math.floor(Math.random() * 100) + 1; // Generate a unique quiz ID
  console.log(req.body);
  db.query('INSERT INTO quizzes (name, is_private) VALUES ($1, $2)', [ name, private])
    .then(() => {
      // Quiz creation succeeded, redirect to the home page or the newly created quiz page
      res.redirect('/');
    })
    .catch((err) => {
      console.error('Error creating quiz:', err);
      res.status(500).send('Server Error');
    });
});
// Share URLs with freinds
router.get('/quiz/:id', (req, res) => {
  const quizId = req.params.id;

  // Fetch the quiz and its questions using Promise.all to execute both queries in parallel
  Promise.all([
    db.query('SELECT * FROM quizzes WHERE id = $1', [quizId]),
    db.query('SELECT * FROM questions WHERE quiz_id = $1', [quizId]),
  ])
    .then(([quizResult, questionsResult]) => {
      const quiz = quizResult.rows[0];
      const questions = questionsResult.rows;
      const shareURL = `https://www.examplequizapp.com/share/${quizId}`;
      res.render('quiz', { quiz, questions, shareURL });
    })
    .catch((err) => {
      console.error('Error fetching quiz:', err);
      res.status(500).send('Server Error');
    });
});

module.exports = router;