## Question Answer Approach

**Multi vs Single Page:** Multi page app makes more sense for this

- The right answer is always stored as option_1 in the questions database. The ordering of the options will be randomized when the page is rendered 
- Only multiple choice questions 

**Pages:**
- Homepage - (/)
- Create quiz - (/create)
- Select Quiz - (/:id)
- Submit quiz - (/:id/:id)
  - Second id is the unique URL that they can use to share with thier friends 
- User's page (private quizzes) - (/users/:id)
- Results page - (/quiz/:id)
  - The id is the unique URL that they can use to share with their friends 


Features
**Create Quizzes**
- User can create quizzes
- User can choose to make their quizzes public or private, if public it should show on the home page 
- User can publish quizzes 

User Experience: User clicks Create Quiz button -> Takes to new page where user can click add question and fill out with answer -> User toggles button for private vs public -> User can click publish -> If quiz is public, it should publish on the home page, if private, it should publish on the users own profile 

Dev Responsibility: Create quiz 
- Matt

Flow:
POST /newQuiz

**Sharing quizzes**
- User can share link to quizzes they create
- People with the link can attempt a quiz

**User Experience:** A unique URL is created when a quiz is created, 

Dev Responsibility: Make sure that a random URL is generated, make sure that it links back to the results page/quiz 
- Worku

Flow:
GET /quiz/:id 


**Taking Quiz**
- User can select a quiz and answer it 
- Once user clicks submit quiz, a new page loads with the score, the user is then able to share their score via url 
- The score only is the amount of questions they got right, we won't tell them which questions they got wrong 

**User Experience:** User clicks on quiz -> New page loads with only the quiz questions -> User completes quiz by selecting answer, user has option to change answer late -> User clicks submit when done -> After clicking submit, a new page loads with their score and a unique URL 
- User MUST answer question, will not allow user to submit if they didn't select an option 
- This URL must be shareable and link back to the results page 

Dev Responsibility: 
- Olakunle 

Flow: 
GET quiz/:id
