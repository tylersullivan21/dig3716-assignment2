document.addEventListener('DOMContentLoaded', function(event) {
 
    /*************************************************/
      //CODE WHICH TIES EVENTS TO HTML ELEMENTS//
    /*************************************************/

    //CODE TO TIE EVENTS TO FIRST NAME//
    var input_name = document.getElementById("first-name");
    input_name.addEventListener("focus", showNameHint);
    input_name.addEventListener("focusout", function(){validateData(this)}); /*input_name.addEventListener("focusout", validateName); */
 
        //CODE TO TIE EVENTS TO FIRST NAME//
        var input_name = document.getElementById("last-name");
        input_name.addEventListener("focus", showLastNameHint);
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

function showLastNameHint(){

    /* show hint, hide validation message */
    var last_name_hint = document.getElementById("last-name-hint");
    last_name_hint.style.display = "block";
    console.log("focus is got!");

    var last_name_message = document.getElementById("last-name-message");
        
     last_name_message.style.display = "none";
 
}

function showEmailHint(){
    var email_hint = document.getElementById("email-hint");
    email_hint.style.display = "block";
    var name_message = document.getElementById("email-message");    
    name_message.style.display = "none";
}

function showPhoneHint(){
    var phone_hint = document.getElementById("phone-number-hint");
    phone_hint.style.display = "block";
    var phone_number_message = document.getElementById("phone-number-message");    
    phone_number_message.style.display = "none";
}

function showSulley(){
    var sulley_hint = document.getElementById("sulley-hint");
    sulley_hint.style.display = "block";
    var sulley_message = document.getElementById("sulley-message");    
    sulley_message.style.display = "none";
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


function validateLastName(){
    console.log("this code will run to validate name and hide hint");
    var last_name_hint = document.getElementById("last-name-hint");
    last_name_hint.style.display = "none";

    var last_name_input = document.getElementById("last-name");
   
   /* console.log("input has string value: "+name_input.value);
    console.log("input is of type:: "+ typeof(name_input.value));*/

    var pattern = /[^a-zA-Z\s']/;

    /*validation fails*/
    if(last_name_input.value == "" || pattern.test(last_name_input.value) == true /*has characters that are not letters*/)
    {
        console.log("validation fails and show error message");

        var last_name_message = document.getElementById("last-name-message");
        last_name_message.firstElementChild.innerText = "You didn't enter a valid Name!";
        
        last_name_message.classList.add("error");
        last_name_message.classList.remove("valid");
        last_name_message.style.display = "block"; 
    }
     /*validation success*/
    else{
        console.log(" validation is successful and show green icon");
        var last_name_message = document.getElementById("last-name-message");
        
        last_name_message.classList.add("valid");
        last_name_message.classList.remove("error");

        /* Chnage text inside message-text */ 
        last_name_message.firstElementChild.innerText = "Valid";

        last_name_message.style.display = "block";
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
         email_message.firstElementChild.innerText = "blah@blah.com format please";       
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
    var phone_hint = document.getElementById("phone-number-hint");
    phone_hint.style.display = "none";
    var phone_input = document.getElementById("phone-number");
   
    /* console.log("input has string value: "+name_input.value);
     console.log("input is of type:: "+ typeof(name_input.value));*/
 
     var pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
 
     /*validation fails*/
     if(phone_input.value == "" || pattern.test(phone_input.value) == false /*has characters that are not letters*/)
     {
         console.log("validation fails and show error message");
 
         var sulley_message = document.getElementById("phone-number-message");
         sulley_message.firstElementChild.innerText = "Please enter xxx-xxx-xxxx format";       
         sulley_message.classList.add("error");
         sulley_message.classList.remove("valid");
         sulley_message.style.display = "block";         
     }
      /*validation success*/
     else{
         console.log(" validation is successful and show green icon");
         var sulley_message = document.getElementById("phone-number-message");
         sulley_message.classList.add("valid");
         sulley_message.classList.remove("error");
 
         /* Chnage text inside message-text */ 
         sulley_message.firstElementChild.innerText = "Valid";
 
         sulley_message.style.display = "block";
     }
}

function validateSulley(){
    var sulley_hint = document.getElementById("sulley-hint");
     sulley_hint.style.display = "none";
     var sulley_input = document.getElementById("sulley-address");
   
     /* console.log("input has string value: "+name_input.value);
      console.log("input is of type:: "+ typeof(name_input.value));*/
  
      var pattern = /^http:\/\/.*~/;
  
      /*validation fails*/
      if(sulley_input.value == "" || pattern.test(sulley_input.value) == false /*has characters that are not letters*/)
      {
          console.log("validation fails and show error message");
  
          var sulley_message = document.getElementById("sulley-message");
          sulley_message.firstElementChild.innerText = "Make sure to enter http:// and a ~";       
          sulley_message.classList.add("error");
          sulley_message.classList.remove("valid");
          sulley_message.style.display = "block";         
      }
       /*validation success*/
      else{
          console.log(" validation is successful and show green icon");
          var sulley_message = document.getElementById("sulley-message");
          sulley_message.classList.add("valid");
          sulley_message.classList.remove("error");
  
          /* Chnage text inside message-text */ 
          sulley_message.firstElementChild.innerText = "Valid";
  
          sulley_message.style.display = "block";
      }
}


function validateData(element){
    console.log("the input element that triggered the focus out is :: "+ element);

    if(element.id == "first-name"){
        validateName();
    }
    else if(element.id == "last-name"){
        validateLastName();   }

    else if(element.id == "email"){
        validateEmail();   }

   else if(element.id == "phone-number"){
       validatePhone();
   }
   else if(element.id == "sulley-address"){
       validateSulley();   
    }
}