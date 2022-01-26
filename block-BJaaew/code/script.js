let container = document.querySelector('.GOT-container');
let gotByCategoryName = document.querySelector('.all-houses-btn');
let userInput = document.querySelector('input');
let gotCardContainer = document.querySelector('.card-container')

//Printing  every character of every house  for  the first time 
got.houses.map((everyHouse)=>{
    everyHouse.people.map((everyCharacter)=>{
        createUi(everyCharacter);
    });
});

// To Filter  by the house Names 
gotByCategoryName.addEventListener('click',(event)=>{
    let houseNameToFilter = event.target.value;
    gotCardContainer.innerHTML = "";
    got.houses.filter((everyHouse)=>{
        if(houseNameToFilter === everyHouse.name){
            everyHouse.people.map(everyCharacter=>{
                createUi(everyCharacter);
            });
        }
    });

});

//To filter  According to the User input 
userInput.addEventListener('input',(event)=>{
    let input=event.target.value;
    gotCardContainer.innerHTML = "";
    got.houses.map((everyHouse)=>{
        everyHouse.people.filter(everyCharacter=>{
            if(everyCharacter.name.toLowerCase().includes(input)){
                createUi(everyCharacter);
            }
        });
    });
});

// creating the user interface and also appending the values 
function createUi( eachCharacter){
    let card = document.createElement('div');
    card.classList.add('card');
    container.append(card);

    let charImage = document.createElement('img');
    charImage.src = eachCharacter.image;
    card.append(charImage);

    let charName = document.createElement('h4');
    charName.innerText = eachCharacter.name;
    card.append(charName);
    
    let charDescription = document.createElement('p');
    charDescription.classList.add('character-description');
    charDescription.innerText= eachCharacter.description;
    card.append(charDescription);

    let cardBtn = document.createElement('a');
    cardBtn.classList.add('btn');
    cardBtn.innerText = "know More";
    card.append(cardBtn);

    gotCardContainer.append(card);
}