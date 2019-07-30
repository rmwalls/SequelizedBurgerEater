//This file handles button clicks on the web page
var $burgerName = $("#burger");

//add a burger
$(".create-form").on("submit", function(event) {
  event.preventDefault(); // preventDefault on a submit event.
  if($burgerName.val() !== ""){
    var newBurger = {burger_name: $burgerName.val()}
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        //console.log("created new burger");
        location.reload(); // Reload the page to get the updated list
      }
    );
  } //end if
}) //end on click
    
//===================================
//Change Devoured state 
$(function() {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
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
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("burger deleted");
      location.reload(); // Reload the page to get the updated list
      }
    );
  })
})