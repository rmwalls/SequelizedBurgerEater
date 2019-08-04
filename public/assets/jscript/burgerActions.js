//This file handles button clicks on the web page to send the entered data on to the controller
var $burgerName = $("#burger");

//add a burger
$(".create-form").on("submit", function(event) {
  event.preventDefault(); // preventDefault on a submit event.
  if($burgerName.val() !== ""){ //burger name should not be blank
    var newBurger = {name: $burgerName.val()}
    $.ajax("/burgers", {
      type: "POST", //ajax POST request to the web server
      data: newBurger
    }).then(
      function() {
        console.log("created new burger(burgerActions.js)");
        location.reload(); // Reload the page to get the updated list
      }
    );
  } //end if
}) //end on click
    
//===================================
//Change Devoured state from false to true to move it to the devoured section on page
$(function() {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/burgers/" + id, {
      type: "PUT",  //ajax PUT request to the web server
      data: {devoured: 1}
    }).then(
      function() {
        location.reload(); // Reload the page to get the updated list
      } // end function
    ); //end then
  }) //end on click
}) //end function

//========================================
// Get rid of Yucky burgers (aka delete)
$(function() {
  $(".delete-burger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log("id is " + id);
    // Send the ajax DELETE request.
    $.ajax("/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("burger deleted");
        location.reload(); // Reload the page to get the updated list
      }
    );
  })
})