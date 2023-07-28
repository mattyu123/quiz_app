
const { Pool } = require('pg');


const db = require('../connection');

const { v4: uuidv4 } = require('uuid');

//function that will import the quiz information to the database
const insertQuiz = function(quiz) {
  //for purposes of this app, we only have 1 user
  const user_id = 1;
  const quizTitle = quiz.title
  const quizDescription = quiz.description
  const isPrivate = quiz.private !== undefined ? quiz.private: false
  const quizUrl = uuidv4(); // Generate a unique URL for the quiz

  const queryCode =
  `
  INSERT INTO quizzes (user_id, name, description, is_private,url)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `

  return db
    .query(queryCode, [user_id, quizTitle, quizDescription, isPrivate,quizUrl])
    .then(res => {
      return res.rows[0];
    })
    // .catch(err => {
    //   console.log("There is an error", err)
    // })
  }

//pull the last quiz ID as that would be the quiz that was just submitted
const pullLastQuizID = function() {
  const queryCode =
  `
  SELECT id
  FROM quizzes
  ORDER BY id DESC
  LIMIT 1;
  `

  return db
    .query(queryCode)
    .then(res => {
      return res.rows[0];
    })
    // .catch(err => {
    //   console.log("There is an error", err)
    // })
  }

const insertQuestionAnswers = function(questions, quizID) {
  let queryCode = `INSERT INTO questions (quiz_id, question, option_1, option_2, option_3, option_4)
  VALUES`

  if (questions.length === 1) {
    for (const item of questions) {
      queryCode += `('${quizID}','${item.question}', '${item.option_1}', '${item.option_2}', '${item.option_3}', '${item.option_4}');`
    }
  } else {
    for (const [index, item] of questions.entries()) {
      if (index === questions.length - 1) {
        queryCode += `('${quizID}','${item.question}', '${item.option_1}', '${item.option_2}', '${item.option_3}', '${item.option_4}');`
      } else {
        queryCode += `('${quizID}','${item.question}', '${item.option_1}', '${item.option_2}', '${item.option_3}', '${item.option_4}'),`
      }
    }
  }

  return db
    .query(queryCode)
    .then(res => {
      return res.rows[0];
    })
    // .catch(err => {
    //   console.log("There is an error", err)
    // })
}

module.exports = { insertQuiz, pullLastQuizID, insertQuestionAnswers };
