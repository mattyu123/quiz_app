const db = require('../connection');

const insertQuiz = () => {
return db.query(`
  INSERT INTO quizzes
`)
}
