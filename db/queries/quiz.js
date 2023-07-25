const db = require('../connection');

const insertQuiz = (quizData) => {
  console.log(quizData)

  return db.query(`
  INSERT INTO quizzes (user_id, name, description, is_private, url)
  VALUES(1, quizData.quiz-title, quizData.quiz-description, , url)
`)
}

module.exports = { insertQuiz };
