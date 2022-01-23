let rps = ["rock","paper","scissor","paper","rock","paper","scissor","rock","paper","scissor","rock","paper","paper"];
console.log(rps.length);
let rock = document.querySelector('.rock');
let alli = document.querySelectorAll('.useri');
let whowins = document.querySelector('.whowins');
let userInput = '';
let userText = document.querySelector('.userdesiredInput');
let computerText = document.querySelector('.autogenratedInput');
let randomRockPaperScissor;

let userTotalwin = document.querySelector('.user-win-count');
let computerTotalwin = document.querySelector('.computer-win-count');
let userwinCount = 0;
let computerwinCount = 0;
alli.forEach(rps=>{
  rps.addEventListener('click',function(event){
    userInput= event.target.dataset.rps;
    userText.innerText = userInput;
    randomRockPaperScissor = randomRockPaper();
    computerText.innerText =  randomRockPaperScissor;

    if(userInput=== 'rock' &&  randomRockPaperScissor==='paper'){
      whowins.style.color = "#CA0b00";
      whowins.innerHTML = "You Lost 😑";
      userwinCount =userwinCount-1;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount+ 1;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput==='paper'&&  randomRockPaperScissor==='rock'){
      whowins.style.color = "#2D8CFF";
      whowins.innerHTML = "You Won 😊 ! ";
      userwinCount = userwinCount+1;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount- 1;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput=='rock' &&  randomRockPaperScissor==='rock'){
      whowins.innerHTML = "it's a tie.  ";
      userwinCount = userwinCount+0;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount+ 0;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput==='paper' && randomRockPaperScissor==='scissor'){
      whowins.style.color = "#CA0B00";
      whowins.innerHTML = "You Lost 😑"
      userwinCount =userwinCount-1;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount+ 1;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput==='scissor' && randomRockPaperScissor==='paper'){
      whowins.style.color = "#2D8CFF";
      whowins.innerHTML = "You Won 😊 ! ";
      userwinCount = userwinCount+1;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount- 1;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput==='paper' && randomRockPaperScissor==='paper'){
      whowins.innerHTML = "it's a tie.  ";
      userwinCount = userwinCount+0;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount+ 0;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput==='scissor' && randomRockPaperScissor==='rock'){
      whowins.style.color = "#CA0b00";
      whowins.innerHTML = "You Lost 😑"
      userwinCount =userwinCount-1;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount+ 1;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput==='rock' && randomRockPaperScissor==='scissor'){
      whowins.style.color = "#2D8CFF";
      whowins.innerHTML = "You Won 😊 ! ";
      userwinCount = userwinCount+1;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount- 1;
      computerTotalwin.innerText = computerwinCount;
    }
    else if(userInput=== 'scissor' &&  randomRockPaperScissor=='scissor'){
      whowins.innerHTML = "it's a tie.  ";
      userwinCount = userwinCount+0;
      userTotalwin.innerText = userwinCount;
      computerwinCount = computerwinCount+ 0;
      computerTotalwin.innerText = computerwinCount;
    }
    else{
      userInput = "";
       randomRockPaperScissor= "";
    }
  }); 
});
console.log(userInput);
console.log(alli);
function randomRockPaper(){
  let random = Math.floor(Math.random()*13);
  return rps[random];
}
