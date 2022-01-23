const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const dataModal = document.querySelector('.modal-container');

// Hide the Modal so we can not see it while filling the form 

userInfo ={};

dataModal.style.display ="none";

function handleEvent(event){
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.entertainmentMode = form.elements.entertainment.value;
    userInfo.color  = form.elements.color.value;
    userInfo.userRating  = form.elements.range.value;
    userInfo.consent = form.elements.terms.checked;
    userInfo.bookGenre  = form.elements.drone.value;
    // console.log(userInfo);
}
form.addEventListener('submit',handleEvent);


// Making the modals



console.log(userInfo);
function showModal(event){
    console.log(` this is printed by the modal  if it has access  to ${userInfo}`);
    // form.style.display = "none";
    dataModal.style.display ="inline-block";
    dataModal.classList.add('container');
    document.querySelector('.modalName').innerText =userInfo.name;
    document.querySelector('.modalEmail').innerText =userInfo.email;
    document.querySelector('.modalChoices').innerText =userInfo.entertainmentMode;
    document.querySelector('.modalColor').innerText =userInfo.color;
    document.querySelector('.modalrating').innerText =userInfo.userRating;
    document.querySelector('.modalbookgenre').innerText =userInfo.bookGenre;
    // document.querySelector('.consent');
}
submitButton.addEventListener('click',showModal);