--Populate initial private quiz
INSERT INTO quizzes (user_id, name, description, is_private, url)
VALUES (1, 'Video Games', 'quiz about games', true, 'placeholder url');

INSERT INTO questions (quiz_id, question, option_1, option_2, option_3, option_4)
VALUES (2, 'What is the name of the Italian plumber whose favourite mode of transportation is by pipe and loves to eat mushrooms?', 'Mario','Guiseppe','Tony','Felipe'),
(2, 'What is the best selling video game console of all time?','Playstation 2','Nintendo DS','XBOX 360','Playstation 4');
