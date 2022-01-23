const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const modalwrapper = document.querySelector('.modal-wrapper');
const dataModal = document.querySelector('.modal-container');
// to  hide the modal  when   the  button clicked 
const closeModal = document.querySelector('.close-btn');
// Hide the Modal so we can not see it while filling the form 

userInfo ={};


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.entertainmentMode = form.elements.entertainment.value;
    userInfo.color  = form.elements.color.value;
    userInfo.userRating  = form.elements.range.value;
    userInfo.consent = form.elements.terms.checked;
    userInfo.bookGenre  = form.elements.drone.value;
});

//show modal 
submitButton.addEventListener('click',function(){
    modalwrapper.style.display="inline-block";
});

//hide  the modal when  the  close button clicked
closeModal.addEventListener('click',function(){
    modalwrapper.style.display='none';
})

function showModal(obj ={}){
    console.log(userInfo);
    document.querySelector('.modalName').innerText =obj.name;
    document.querySelector('.modalEmail').innerText =obj.email;
    document.querySelector('.modalChoices').innerText =obj.entertainmentMode;
    document.querySelector('.modalColor').innerText =obj.color;
    document.querySelector('.modalrating').innerText =obj.userRating;
    document.querySelector('.modalbookgenre').innerText =obj.bookGenre;
    // document.querySelector('.consent');
};
showModal(userInfo);
