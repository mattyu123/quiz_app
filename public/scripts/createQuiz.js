const createQuestionElement = function() {
  let question = (
    `
    <article class="added-questions">
    <h3>Question</h3>
    <div class="option-box">
      <p>Question: </p>
      <form>
        <input type="text">
      </form>
    </div>
    <div class="option-box">
      <p>Option A: </p>
      <form>
        <input type="text">
      </form>
    </div>
    <strong><p>Note: The right answer MUST be put in option A field</p></strong>
    <div class="option-box">
      <p>Option B: </p>
      <form>
        <input type="text">
      </form>
    </div>
    <div class="option-box">
      <p>Option C: </p>
      <form>
        <input type="text">
      </form>
    </div>
    <div class="option-box">
      <p>Option D: </p>
      <form>
        <input type="text">
      </form>
    </div>
  </article>`
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
