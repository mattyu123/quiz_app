const db = require('../connection');

//public quizzes

const getPublicQuizzes = () => {
  return db.query(`SELECT * FROM quizzes WHERE is_private = false`)
  .then((res) => {
    return res.rows;
  });
};

//both private and public quizzes

const getQuizzesByUserId = (id) => {
  return db
    .query(`SELECT * FROM quizzes WHERE is_private = false OR is_private = true AND user_id = $1`, [id])
    .then((res) => {
      return res.rows;
    });
};

module.exports = {
  getPublicQuizzes,
  getQuizzesByUserId,  
};