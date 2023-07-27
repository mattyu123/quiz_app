// const quizQueries = require('../db/queries/quizzes');
const express = require('express');
const router = express.Router();
const db = require('../db/connection');
// // const database = require("../db/connection.js")

// //When user clicks on create button, render the entire create quiz page
// router.get('/create', (req, res) => {
//   res.render('createQuiz')
// })

//Server receives the request from browser
// router.post('/create', (req, res) => {
//   const body = req.body
//   const newObj = {}

//   //turn the string "true" into a boolean before sending it to the database, data stored in newObj
//   for (const item in body) {
//     if(body[item] === "true") {
//       newObj[item] = (body.private === 'true')
//     } else {
//       newObj[item] = body[item]
//     }
//   }

//   //run the insertQuiz function on the database object
//   database
//     .insertQuiz(newObj)
//     .then(() => {
//       res.send()
//     })
//     .catch((error) => {
//       console.log(error)
//     });
// })
router.get('/create', (req, res) => {
  res.render('createQuiz')
})

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.cookie("userId", userId);

  db.quizQueries.getQuizzesByUserId(userId)
    .then((quizzes) => {
      const templateVars = { quizzes }
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
  console.log('hello');
  console.log('this', req.body);
  const { name, private = "true",description } = req.body;
  db.query(`INSERT INTO quizzes (name, is_private,description) VALUES ($1, $2, $3)`, [name, private, description])
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


// module.exports = router;
module.exports = router;
