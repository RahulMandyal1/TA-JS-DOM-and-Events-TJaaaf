let  showCommand = document.querySelector('.command');
let  showDescription = document.querySelector('.command-description');
let  btn  = document.querySelector('.generate-command');


function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

function handleEvent(){
  let randomIndex  = getRandomNumber(data.length);
  let getdata = data[randomIndex];
  showCommand.innerText = getdata.commandName;
  showDescription.innerText = getdata.commandDescription;
}
btn.addEventListener('click',handleEvent);