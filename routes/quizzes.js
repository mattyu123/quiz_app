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

const quizQueries = require('../db/queries/quizzes');

router.get('/:id', (req,res) => {
  const userId =  req.params.id;
  res.cookie("userId", userId);

  quizQueries.getQuizzesByUserId(userId)
    .then((quizzes) => {
      const templateVars = {quizzes}
      res.render('index', templateVars);
    })
    .catch((err) => {
      res.send(err)
    })
});

module.exports = router;