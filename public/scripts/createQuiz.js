const createQuestionElement = function() {
  let question = (
    `
  <form class="added-questions">
    <h3>Question</h3>
    <input type="text" name="question">
    <strong><p>Note: The right answer MUST be put in option A field</p></strong>
    <p>Option A: </p>
    <input type="text" name="option_1">
    <p>Option B: </p>
    <input type="text" name="option_2">
    <p>Option C: </p>
    <input type="text" name="option_3">
    <p>Option D: </p>
    <input type="text" name="option_4">
  </form>
  `
  );
  return question;
}

//When the user clicks on "add quiz question", a new question form will appear for user to add a question"
$(document).ready(function() {
  $('#new-question').click(function() {
    event.preventDefault();
    $('#user-created-questions').append(createQuestionElement())
  });
})

//when the user submits the form, then it will create an array with the data required and can be sent to server
$(document).ready(function() {
  $('#build-quiz-info').submit(function(event) {
    event.preventDefault();

    //takes the data that we get from the form
    const results = $(this).serializeArray();

    $.post(
      '/quiz/create',
      results,
      function(data, status) {
        window.location.href='/quiz/create/questions'
        console.log(data, status)
      }
    )
  })
});

//When the user clicks on submit quiz, data array created with the questions and answers they added
$(document).ready(function() {
  $('#submit-quiz').click(function(event) {
    $('#submitted-quiz').slideDown(("slow", () => {}))
    event.preventDefault()

    const results = $('.added-questions').serializeArray();


    $.post(
      '/quiz/create/questions',
      results,
      function(data, status) {
        console.log(data, status)
      }
    )
  })
});
