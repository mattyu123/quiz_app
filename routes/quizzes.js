/*
 * All routes for quizzes are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

router.use(cookieSession());

const db = require('../db/connection');

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

module.exports = router;