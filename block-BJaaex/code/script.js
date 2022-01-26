let memoryGameData = [
    {
        name : "superMario",
        img : "https://img.icons8.com/doodle/48/000000/super-mario.png",
    },
    {
        name : "ironMan",
        img : "https://img.icons8.com/doodle/48/000000/iron-man.png",
    },
    {
        name : "superMan",
        img : "https://img.icons8.com/office/16/000000/superman.png",
    },
    {
        name : "walterWhite",
        img : "https://img.icons8.com/doodle/48/000000/walter-white.png",
    },
    {
        name : "spiderMan",
        img : "https://img.icons8.com/office/16/000000/spiderman-head--v1.png",
    },
    {
        name : "stanMarsh",
        img : "https://img.icons8.com/doodle/48/000000/walter-white.png",
    },
    {
        name : "hackerMask",
        img : "https://img.icons8.com/doodle/48/000000/anonymous-mask.png",
    },
    {
        name : "greyIcon",
        img : "https://img.icons8.com/doodle/50/000000/grey.png",
    },
];
const root= document.querySelector('.game-container');
let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;


// we have  the  data  in the  data.js file 
const  cardContainer = document.createElement('div');

cardContainer.setAttribute('class','grid');

// now appending   he element  in the  root element 
root.append(cardContainer);

// now  Iterating over each and every  elements  so we can  create 12 cards 

createUi(memoryGameData);
function createUi(array){
    array.forEach((eachItem)=>{
        let card = document.createElement('div');
        card.setAttribute('class','card');
        card.dataset.name = eachItem.name;
        card.style.backgroundImage = `url(${eachItem.img})`;
        cardContainer.append(card);
    });
    
};


//Duplicating the array  for  the second  twelve  cards 


let secondData = memoryGameData.concat(memoryGameData);

createUi( secondData);

// sort  the  data everytime 
secondData.sort(() => 0.5 - Math.random());


cardContainer.addEventListener('click', function (event) {
    let clicked = event.target;
    console.log(clicked);
    if (clicked.nodeName === 'DIV' && count < 2) { 
        count++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            console.log(firstGuess);
            previousTarget = clicked;
            previousTarget.classList.add('selected');
          } else {
            secondGuess = clicked.dataset.name;
            console.log(secondGuess);
            clicked.classList.add('selected');
          }
        
        if(firstGuess === secondGuess){
            clicked.classList.add('match');
            previousTarget.classList.add('match');
        }
    }
  });

//   to reset  after every  clicked
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  };