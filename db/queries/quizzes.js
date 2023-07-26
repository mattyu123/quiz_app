const db = require('../connection');

const getPublicQuizzes = () => {
  return db.query('SELECT * FROM quizzes WHERE is_private=false;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPublicQuizzes };