
let allboxes = document.querySelectorAll('.boxNormal');

function handleEvent(addNumber){
    addNumber.firstChild.style.display ="inline";
    setTimeout(() => {
        addNumber.firstChild.style.display ="none";
    }, 5000);
}

allboxes.forEach((box,index)=>{
    let h1 = document.createElement('h1');
    h1.innerText= index+1;
    h1.style.display= 'none';
    box.append(h1);  
    box.addEventListener("click",function(){
        handleEvent(box);
    })

})

// Flip using the delegation
let delegatedBox = document.querySelectorAll('.boxD');
let root = document.querySelector('.delegatedContainer');
delegatedBox.forEach((box,index)=>{
    let h1 = document.createElement('h1');
    h1.innerText= index+1;
    h1.style.display= 'none';
    //also added dataset  but dataset is of no user
    box.setAttribute('data-box',`${'box'+(index+1)}` );
    // every box is going to have a dataset property like box1,box2,box3,box4 and so on
    box.append(h1);  
})
root.addEventListener("click" ,delegatedEvents)

function delegatedEvents(event){
     let clickedBox = event.target.firstChild;
     clickedBox.style.display="inline";
     setTimeout(() => {
        clickedBox.style.display="none";
    }, 5000);
}
// using the Event delegation 


