


const createQuestionElement = function() {
  let $question = (
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
  return $question;
}

$('#build-quiz-info').submit(function() {

})



//When the user clicks on "add quiz question, a new question form will appear for user to add a question"
$(document).ready(function() {
  $('#add-question').click(function() {
    event.preventDefault();
    $('#user-created-questions').append(createQuestionElement())
    console.log($('#user-created-questions').length)
  });

  //when the user submits the form, then it will create an array with the data required and can be sent to server
  $('#build-quiz-info').submit(function(event) {
    event.preventDefault();

    //takes the data that we get from the form
    const results = $(this).serializeArray();
    console.log("originial", results)

    //turn the "true" string value into a boolean
    // const newResults = results.map(item => {
    //   if (item.value === 'true') {
    //     item.value = true;
    //   } else if (item.value === 'false') {
    //     item.value = false;
    //   }
    //   return item;
    // });

    $.post(
      '/quiz/create',
      results,
      function(data, status) {
        console.log(data, status)
      }
    )
  })
});
