DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS quiz_attempts CASCADE;
DROP TABLE IF EXISTS question_answer CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
<<<<<<< HEAD
  name VARCHAR(255) ,
=======
  name VARCHAR(255) NOT NULL,
  description TEXT,
>>>>>>> 217aac194814b7c3c15c6d3169406c4cef2eeba2
  is_private BOOLEAN,
  url VARCHAR(2048)
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  option_1 TEXT,
  option_2 TEXT,
  option_3 TEXT,
  option_4 TEXT
);

CREATE TABLE quiz_attempts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);

CREATE TABLE question_answer (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_attempts_id INTEGER REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer VARCHAR(255)
);
