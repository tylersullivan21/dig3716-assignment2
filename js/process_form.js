document.addEventListener('DOMContentLoaded', function(event) {
 
    /*************************************************/
      //CODE WHICH TIES EVENTS TO HTML ELEMENTS//
    /*************************************************/

    //CODE TO TIE EVENTS TO FIRST NAME//
    var input_name = document.getElementById("first-name");
    input_name.addEventListener("focus", showNameHint);
    input_name.addEventListener("focusout", validateName);
 
  
    //CODE TO TIE EVENTS TO EMAIL//
    var input_email = document.getElementById("email");
    input_email.addEventListener("focus", showEmailHint);
    input_email.addEventListener("focusout", validateEmail);

    //CODE TO TIE EVENTS TO PHONE NUMBER//
    var input_phone = document.getElementById("phone-number");
    input_phone.addEventListener("focus", showPhoneHint);
    input_phone.addEventListener("focusout", validatePhone);
 
    //CODE TO TIE EVENTS TO SULLEY ADDRESS//
    var input_sulley = document.getElementById("sulley-address");
    input_sulley.addEventListener("focus", showSulley);
    input_sulley.addEventListener("focusout", validateSulley);
 
  })

   /*************************************************/
        /* CREATES FUNCTION WHICH CHANGE THE CSS
        CLASSES TO VISIBILTY: VISIBLE, TIES TO 
        HTML IDS*/
    /*************************************************/

  function showNameHint(){
    var name_hint = document.getElementById("name-hint");
    name_hint.style.visibility = "visible";
    console.log("focus is got!");
 
}

function showEmailHint(){
    var email_hint = document.getElementById("email-hint");
    email_hint.style.visibility = "visible";
}

function showPhoneHint(){
    var phone_hint = document.getElementById("phone-hint");
    phone_hint.style.visibility = "visible";
}

function showSulley(){
    var sulley_hint = document.getElementById("sulley-hint");
    sulley_hint.style.visibility = "visible";
}
 
/*************************************************/
        /* CREATES FUNCTION WHICH CHANGE THE CSS
        CLASSES TO VISIBILTY: HIDDEN, TIES TO 
        HTML IDS*/
    /*************************************************/

function validateName(){
    console.log("this code will run to validate name and hide hint");
    var name_hint = document.getElementById("name-hint");
    name_hint.style.visibility = "hidden";
}

function validateEmail(){
    console.log("this code will run to validate email and hide hint");
    var name_hint = document.getElementById("email-hint");
    name_hint.style.visibility = "hidden";
}

function validatePhone(){
    console.log("this code will run to validate phone number and hide the hint");
    var phone_hint = document.getElementById("phone-hint");
    phone_hint.style.visibility = "hidden";
}

function validateSulley(){
    var sulley_hint = document.getElementById("sulley-hint");
     sulley_hint.style.visibility = "hidden";
}