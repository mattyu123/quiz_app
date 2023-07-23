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
 //all questions by quizId
 const getQuestionsByQuizId = (id) => {
  return db
    .query(`SELECT * FROM questions WHERE quiz_id IN ($1)`, [id])
    .then((res) => {
      return res.rows;
    });
 }

 //submitQuiz takes user_id, name, is_private and private_id
 const submitQuiz = (quizObj) => {
  const {user_id, quiz_name, is_private, private_id} = quizObj; //destructure
  const queryText = `INSERT INTO quizzes(user_id, name, is_private, private_id) VALUES ($1, $2, $3, $4) RETURNING id`;//insert new row to 'quizzes' table
  const values = [user_id, quiz_name, !!private, private_id];//Values to be inserted to db

  return (
    db
      .query(queryText,values) //query pass to cb function
      .then((res) =>)
  );
 }

module.exports = {
  getPublicQuizzes,
  getQuizzesByUserId, 
  getQuestionsByQuizId 
};