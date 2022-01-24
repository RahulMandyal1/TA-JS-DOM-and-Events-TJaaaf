let movieBox  = document.querySelector('form');
let  root = document.querySelector('ul');


let movies  = [
];

function deleteMovie(event){
    let  id  = event.target.dataset.id;
    movies.splice(id , 1);
    createMovieUi();
}

function eventHandle(event){
    let id = event.target.id;
    movies[id].watched = !movies[id].watched;
}
// let movieInput = document.querySelector('moviename');

function createMovieUi (){

    root.innerHTML = "";
    movies.forEach((ele , index)=>{
        let li = document.createElement('li');
        let  input  = document.createElement('input');
        let span   = document.createElement('span');
        span.innerHTML = "❌";
        span.setAttribute('data-id',index);


        let label= document.createElement('label');
        label.innerHTML = ele.name;
        input.type= "checkbox";
        input.checked = ele.watched;
        input.id = index;

        input.addEventListener("change",eventHandle)
        li.append(input,label,span);
        root.append(li);


        span.addEventListener('click',deleteMovie)
    });
  
}

function handleEvent(event){
    event.preventDefault();
    movies.push({
        name : event.target.elements.moviename.value ,
        watched :false
    });
    createMovieUi();
    
}
movieBox.addEventListener('submit',handleEvent);