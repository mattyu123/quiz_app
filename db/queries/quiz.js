const db = require('../connection');
const { Pool } = require('pg');

//function that will import the quiz information to the database
const insertQuiz = function(quiz) {
  //for purposes of this app, we only have 1 user
  const user_id = 1;
  const quizTitle = quiz.title
  const quizDescription = quiz.quizDescription
  const isPrivate = quiz.private !== undefined ? quiz.private: false

  const queryCode =
  `
  INSERT INTO quizzes (user_id, name, description, is_private)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `

  return db
    .query(queryCode, [user_id, quizTitle, quizDescription, isPrivate])
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log("There is an error", err)
    })
  }

module.exports = { insertQuiz };
