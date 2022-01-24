let movieBox  = document.querySelector('#moviename');
let  root = document.querySelector('ul');
let userInput  = document.querySelector('.moviename');

let movies  = [{
    name : "titanic",
    watched : false 
},
{
    name : "fast and furious",
    watched : true
}
];
let movieInput = document.querySelector('moviename');
function deleteMovie(event){
    let  id  = event.target.dataset.id;
    movies.splice(id , 1);
    createMovieUi();
}



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
            li.append(input,label,span);
            root.append(li);


            span.addEventListener('click',deleteMovie)
        });
    }
      


    
   

movieBox.addEventListener('keyup',function (event){
    console.log(event.keyCode);
    if(event.keyCode===13){
        console.log(event.target);
        movies.push({
            name : event.target.value,
            watched : false
        });
          
    createMovieUi();
    }
}
);