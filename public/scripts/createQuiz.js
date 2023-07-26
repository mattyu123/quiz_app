const createQuestionElement = function() {
  let question = (
    `
  <form class="added-questions">
    <h3>Question</h3>
    <input type="text" name="question">
    <strong><p>Note: The right answer MUST be put in option A field</p></strong>
    <p>Option A: </p>
    <input type="text" name="option-A">
    <p>Option B: </p>
    <input type="text" name="option-B">
    <p>Option C: </p>
    <input type="text" name="option-C">
    <p>Option D: </p>
    <input type="text" name="option-D">
  </form>
  `
  );
  return question;
}

//When the user clicks on "add quiz question, a new question form will appear for user to add a question"
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

//When the user clicks on submit quiz, data array created
$(document).ready(function() {
  $('#submit-quiz').click(function(event) {
    console.log(event)
    event.preventDefault()

    const results = $('.added-questions').serializeArray();
    console.log(results)

    $.post(
      '/quiz/create/questions',
      results,
      function(data, status) {
        console.log(data, status)
      }
    )
  })
})


// $(document).ready(function() {
//   $('.added-questions').submit(function(event) {
//     console.log(event)
//     event.preventDefault()

//     const results = $(this).serializeArray();
//     console.log(results)

//   })
// })



// $(document).ready(function() {
//   $('#added-questions').submit(function(event) {
//     event.preventDefault()

//     const results = $(this).serializeArray();
//     console.log(results)

//   })
// })


// $(document).ready(function() {
//   $('#user-created-questions').on("submit", function(event) {
//     event.preventDefault();

//     const results = $(this).serialize();

//     console.log(results)
//   })
// })
