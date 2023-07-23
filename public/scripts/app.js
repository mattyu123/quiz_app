// Client facing scripts here
$(document).ready(function(){
  $("show_url").hide();

  $("#share").on("click",function(event) {
    event.preventDefault();
    $("#show_url").show();
  });
});