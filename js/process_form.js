document.addEventListener('DOMContentLoaded', function(event) {
 
    /*************************************************/
      //CODE WHICH TIES EVENTS TO HTML ELEMENTS//
    /*************************************************/

    //CODE TO TIE EVENTS TO FIRST NAME//
    var input_name = document.getElementById("first-name");
    input_name.addEventListener("focus", showNameHint);
    input_name.addEventListener("focusout", function(){validateData(this)}); /*input_name.addEventListener("focusout", validateName); */
 
   //CODE TO TIE EVENTS TO EMAIL//
    var input_email = document.getElementById("email");
    input_email.addEventListener("focus", showEmailHint);
    input_email.addEventListener("focusout", function(){validateData(this)});

    //CODE TO TIE EVENTS TO PHONE NUMBER//
    var input_phone = document.getElementById("phone-number");
    input_phone.addEventListener("focus", showPhoneHint);
    input_phone.addEventListener("focusout", function(){validateData(this)});
 
    //CODE TO TIE EVENTS TO SULLEY ADDRESS//
    var input_sulley = document.getElementById("sulley-address");
    input_sulley.addEventListener("focus", showSulley);
    input_sulley.addEventListener("focusout", function(){validateData(this)});
 
  })

   /*************************************************/
        /* CREATES FUNCTION WHICH CHANGE THE CSS
        CLASSES TO VISIBILTY: VISIBLE, TIES TO 
        HTML IDS*/
    /*************************************************/

  function showNameHint(){

    /* show hint, hide validation message */
    var name_hint = document.getElementById("name-hint");
    name_hint.style.display = "block";
    console.log("focus is got!");

    var name_message = document.getElementById("name-message");    
     name_message.style.display = "none";
 
}

function showEmailHint(){
    var email_hint = document.getElementById("email-hint");
    email_hint.style.display = "block";
    var name_message = document.getElementById("email-message");
        
    name_message.style.display = "none";
}

function showPhoneHint(){
    var phone_hint = document.getElementById("phone-hint");
    phone_hint.style.display = "block";
}

function showSulley(){
    var sulley_hint = document.getElementById("sulley-hint");
    sulley_hint.style.display = "block";
}
 
/*************************************************/
        /* CREATES FUNCTION WHICH CHANGE THE CSS
        CLASSES TO VISIBILTY: HIDDEN, TIES TO 
        HTML IDS*/
    /*************************************************/

function validateName(){
    console.log("this code will run to validate name and hide hint");
    var name_hint = document.getElementById("name-hint");
    name_hint.style.display = "none";

    var name_input = document.getElementById("first-name");
   
   /* console.log("input has string value: "+name_input.value);
    console.log("input is of type:: "+ typeof(name_input.value));*/

    var pattern = /[^a-zA-Z\s']/;

    /*validation fails*/
    if(name_input.value == "" || pattern.test(name_input.value) == true /*has characters that are not letters*/)
    {
        console.log("validation fails and show error message");

        var name_message = document.getElementById("name-message");
        name_message.firstElementChild.innerText = "You didn't enter a valid Name!";
        
        name_message.classList.add("error");
        name_message.classList.remove("valid");
        name_message.style.display = "block"; 
    }
     /*validation success*/
    else{
        console.log(" validation is successful and show green icon");
        var name_message = document.getElementById("name-message");
        
        name_message.classList.add("valid");
        name_message.classList.remove("error");

        /* Chnage text inside message-text */ 
        name_message.firstElementChild.innerText = "Valid";

        name_message.style.display = "block";
    }



    
}

function validateEmail(){
    console.log("this code will run to validate email and hide hint");
    var email_hint = document.getElementById("email-hint");
    email_hint.style.display = "none";

    var email_input = document.getElementById("email");
   
    /* console.log("input has string value: "+name_input.value);
     console.log("input is of type:: "+ typeof(name_input.value));*/
 
     var pattern = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]+$/;
 
     /*validation fails*/
     if(email_input.value == "" || pattern.test(email_input.value) == false /*has characters that are not letters*/)
     {
         console.log("validation fails and show error message");
 
         var email_message = document.getElementById("email-message");
         email_message.firstElementChild.innerText = "You didn't enter a valid Name!";       
         email_message.classList.add("error");
         email_message.classList.remove("valid");
         email_message.style.display = "block";         
     }
      /*validation success*/
     else{
         console.log(" validation is successful and show green icon");
         var email_message = document.getElementById("email-message");
         email_message.classList.add("valid");
         email_message.classList.remove("error");
 
         /* Chnage text inside message-text */ 
         email_message.firstElementChild.innerText = "Valid";
 
         email_message.style.display = "block";
     }
}

function validatePhone(){
    console.log("this code will run to validate phone number and hide the hint");
    var phone_hint = document.getElementById("phone-hint");
    phone_hint.style.display = "none";
}

function validateSulley(){
    var sulley_hint = document.getElementById("sulley-hint");
     sulley_hint.style.display = "none";
}


function validateData(element){
    console.log("the input element that triggered the focus out is :: "+ element);

    if(element.id == "first-name"){
        validateName();
    }
    else if(element.id == "email"){
        validateEmail();   }

   else if(element.id == "phone-number"){
       validatePhone();
   }
   else if(element.id == "sulley-address"){
       validateSulley();   
    }
}