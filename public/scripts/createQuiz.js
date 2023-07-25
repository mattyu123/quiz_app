//function that creates an empty question element for the user to fillout
const createQuestionElement = function() {
  let $question = (
    `
    <article class="added-questions">
    <h3>Question</h3>
    <form>
      <input type="text">
    </form>
    <div class="option-box">
      <p>Option A: </p>
      <form>
        <input type="text">
      </form>
    </div>
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

$(document).ready(function() {
  $('#add-question').click(function() {
    event.preventDefault();
    $('#user-created-questions').append(createQuestionElement())



    // $.ajax({
    //   type: POST,
    //   url: 'views/index.ejs',
    // })
    // .then(() => {
    //   $('user-created-questions').html(createQuestionElement())
    // })
    // .catch((error) => {
    //   alert('Error', error.responseText)
    // })
  });
});
