
let box=document.querySelector('.first');
let box2=document.querySelector('.second');
box.addEventListener("click",function(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor =randomColor;
});
box2.addEventListener("mousemove",function(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    box2.style.backgroundColor =randomColor;
});