let form = document.querySelector('form');
let errorMessage = "";
// Username can't be less than 4 characters 


function notempty(str){
  return Boolean(str);
}
function doesContainANumber(str){
    return str.split('').some(c=> Number(c));
}

function doesContainAt(str){
    return str.split('').some(c=>{
        return c==='@';
    });
}
function doesContainNumber(str){
    return str.split('').every(c=> Number(c));
}


function handleSubmit(event){
    event.preventDefault();
    let userName= event.target.elements.userName;
    let nameofUser = event.target.elements.name;
    let email = event.target.elements.userEmail;
    let phonenumber = event.target.elements.phoneNumber;
    let password = event.target.elements.password;
    let confirmpassword = event.target.elements.confirmPassword;


  // userName validation starts here 
  function validateUsername(){
    let errorMessage = "";
  
    if(userName.value===""){
        errorMessage = "name can  not be empty ";
    }
    else if(userName.value.length<4 && userName.value.length>=1  ){
        errorMessage = " username can't be less than  4 character";
    }
    else{
        errorMessage = "";
    }
    userName.nextElementSibling.innerText = errorMessage;
   };
 validateUsername(); // calling the function to provide username validation


 // Name validation starts here 
   function validateNameField(){
       let errorMessage = "";
      if(doesContainANumber(nameofUser.value)){
         errorMessage = "name can't be a number ";
        }
      else if(nameofUser.value == ""){
        errorMessage = "name can't be empty ";
      }
      else{
          errorMessage = "";
      }
       nameofUser.nextElementSibling.innerText = errorMessage; 
    }
   validateNameField();// calling the function to provide name validation



  // Email Validation starts here 
  function validateEmailField(){
      let errorMessage = "";
      if(!doesContainAt(email.value)){
          errorMessage ="Not a valid email";
      }
      else if(email.value.length<=6){
        errorMessage ="Not a valid email ";
      }
      else{
          errorMessage = "";
      }
      email.nextElementSibling.innerText = errorMessage;
    };
   validateEmailField(); // caliling the function here to perform email validation


   
     // phone number  validation 
  function validatePhoneNumber(){
    let phoneError = " ";
    if(phonenumber.value.length<=7){
     phoneError = "Not  a valid phone Number ";
    }
    else if(!doesContainNumber(phonenumber.value)){
      phoneError = "Phone number can only contain numbers";
    }
    else{
      phoneError = " ";
    }
   phonenumber.nextElementSibling.innerText= phoneError;
  };

  validatePhoneNumber(); // callling the function here 

  function validatePassword(){
    let errorMessage = "";
    if(!notempty(password.value)){
      errorMessage ="Enter  a password  ";
    }
    else{
        errorMessage = "";
    }
    password.nextElementSibling.innerText = errorMessage;
  }
  // calling the function to validate Passaword 
  validatePassword();

  function confirmPassword(){
    let errorMessage = "";
    if(!notempty(confirmpassword.value)){
      errorMessage ="Re-enter your password ";
    }
    else if(password.value !== confirmpassword.value){
      errorMessage = "password and confirm password must be same ";
    }
    else{
        errorMessage = "";
    }
    confirmpassword.nextElementSibling.innerText = errorMessage;
  }

  // calling the  function confirmPassword to validate password
  confirmPassword();

  // if(validateUsername()||validateNameField()||validateEmailField()||
  // validatePhoneNumber()||validatePassword()||confirmPassword()){
  //   alert('user added successfully');
  // };
}

form.addEventListener('submit',handleSubmit);