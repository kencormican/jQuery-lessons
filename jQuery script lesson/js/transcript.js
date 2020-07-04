$(document).ready(function () {

  //The below add inline style to html code which is not best practice
  $("h2").css("text-decoration", "underline"); //adds underline to all <h2> header elements
  $("ul").css("border", "solid 1px #ccc"); //adds border to all unordered lists

  //The below is the preffered approach
  //It binds pre-existing classes to the <h2> and <ul> elements using the jQuery .addClass() method
  $("h2").addClass("underline"); //adds underline to all <h2> header elements
  $("ul").addClass("border"); //adds border to all unordered lists

  //The below removes classes from the <h2> and <ul> elements using the jQuery .removeClass() method
  $("h2").removeClass("underline"); //removes underline from all <h2> header elements
  $("ul").removeClass("border"); //removes border from all unordered lists
  
});
