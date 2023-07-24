// Client facing scripts here
$(document).ready(function(){
  $("show_url").hide();

  $("#share").on("click",function(event) {
    event.preventDefault();
    $("#show_url").show();
  });
  function validateUserInputs(questionCount) {
    const questionInput = $(`#question${questionCount}`);
    for (let i = 1; i <= 4; i++) {
      const answerInput = $(`#answer${questionCount}_${i}`);
      const radioInput = $(`input[name='correctAnswer${questionCount}']:checked`);

      // Remove previous error highlighting
      questionInput.removeClass("input-invalid");
      answerInput.removeClass("input-invalid");

      // Check if any of the fields are empty or radio button is not selected
      if (!questionInput.val()) {
        questionInput.addClass("input-invalid");
        alert("Please fill in the question field before proceeding.");
        return false;
      }

      if (!answerInput.val()) {
        answerInput.addClass("input-invalid");
        alert("Please fill in all answer fields before proceeding.");
        return false;
      }

      if (!radioInput.val()) {
        alert("Please select the correct answer before proceeding.");
        return false;
      }
    }
    return true;
  }
});
