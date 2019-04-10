document.addEventListener('DOMContentLoaded', function(event) {
 
    var input_name = document.getElementById("first-name");
    input_name.addEventListener("focus", showNameHint);
    input_name.addEventListener("focusout", validateName);
 
    console.log("tied focus to our custom function");
 
    //more code
 
  })

  function showNameHint(){
    var name_hint = document.getElementById("name-hint");
    name_hint.style.visibility = "visible";
    console.log("focus is got!");
 
}
 

function validateName(){
    console.log("this code will run to validate name and hide hint");
    var name_hint = document.getElementById("name-hint");
    name_hint.style.visibility = "hidden";
}