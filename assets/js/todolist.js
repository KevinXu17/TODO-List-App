// check off specific todos by clicking
$("ul").on("click", "li", function() {
  // if ($(this).css("color") !== "rgb(128, 128, 128)") {
  //   $(this).css({"color": "gray",
  //                "text-decoration": "line-through"});
  // } else {
  //   $(this).css({"color": "black",
  //                "text-decoration": "none"});
  // }
  $(this).toggleClass("completed");
});

// click on x to delete todos
$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  $(this).parent().fadeOut(1000, function() {
    $(this).remove();
  });
})

//add list when input
$("input[type='text']").keypress(function(event) {
 //check for enter
  if (event.which === 13) {
    // get input text
    var todoText = $(this).val();
    $(this).val("");
    // create li and add to ul
    $("ul").append("<li><span><i class='far fa-minus-square'></i></span> " + todoText + "</li>");
  }
})
$(".fa-plus-square").click(function() {
  $("input[type='text']").fadeToggle();
})
