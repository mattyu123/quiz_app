INSERT INTO users (username, password)
VALUES ('John Smith', 'password');

-- Populate initial public quiz
INSERT INTO quizzes (user_id, name, description, is_private, url)
VALUES (1, 'Country Capitals', 'Quiz about various countries and their capital',false, 'placeholder url');

INSERT INTO quizzes (user_id, name, description, is_private, url)
VALUES (1, 'Country Capitals', 'Quiz about various countries and their capital',false, 'placeholder url');

INSERT INTO quizzes (user_id, name, description, is_private, url)
VALUES (1, 'Country Capitals', 'Quiz about various countries and their capital',false, 'placeholder url');

INSERT INTO quizzes (user_id, name, description, is_private, url)
VALUES (1, 'Na', 'Quiz about various countries and their capital', false, 'placeholder url');



INSERT INTO questions (quiz_id, question, option_1, option_2, option_3, option_4)
VALUES (1, 'What is the capital of Japan?', 'Tokyo', 'Osaka','Sapporo','Kyoto'),
(1, 'What is the capital of the United States?','Washington DC', 'New York','Los Angeles','Portland'),
(1, 'What is the capital of France?', 'Paris', 'Lille', 'Marseille', 'Lyon');

