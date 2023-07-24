const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


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

module.exports = router;
