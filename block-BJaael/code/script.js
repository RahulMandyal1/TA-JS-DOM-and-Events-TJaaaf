let boxContainer = document.querySelector('.box-container');

let arr = [];
 for(let i=0;i<500 ; i++){
     arr.push(i);      
 };


 arr.forEach((elem)=>{
    let box  = document.createElement('div');
    box.classList.add('box');
    boxContainer.append(box);
 });
 

 function colorGenerator(){
    let hexCode = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
     let color='#';
     for(let i=0;i<6 ; i++){
        let random = Math.floor(Math.random()*16);
         color+= hexCode[random]
     }
     return color;
 };

let newbox = document.querySelector('.box1');

document.querySelector('.box-container').addEventListener('mousemove', (e)=>{
   let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   e.target.style.backgroundColor= randomColor;
   
});





// let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

