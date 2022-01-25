function main(){
let root = document.querySelector('ul');
let userInput= document.querySelector('.userinput');
let activeTodo = document.querySelector('.active-todo');
let allTodos = document.querySelector('.all-todo');
let compltedTodos = document.querySelector('.completed-todo');

let alltodos = JSON.parse(localStorage.getItem('todos')) || [];

function deleteTodo(e , parentEle){
    console.dir(e.target)
    let id  = parentEle.dataset.id ;
    alltodos.splice(id , 1);
    localStorage.setItem(
        'todos',
        JSON.stringify(alltodos)
    );
   return createUi(alltodos,root);
}

function updateIsDone(e, todoText){
    let id =e.target.dataset.id;
    alltodos[id].isDone = !alltodos[id].isDone;
    localStorage.setItem(
        'todos',
        JSON.stringify(alltodos)
    );
    if(alltodos[id].isDone === true){
        todoText.classList.add('line-through');
    }
    else{
        todoText.classList.remove('line-through')
    }
};

function createUi(data,rootEle){
    rootEle.innerText = "";
    data.forEach((todo , index)=>{
        // Creating the structure for the  user todo 
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = "checkbox";
        let p= document.createElement('p');
        p.innerText = todo.name;
        let span = document.createElement('span');
        span.innerHTML = ` <i class="fas fa-window-close close-btn"></i>`;
        input.setAttribute("data-id" ,index);
        span.setAttribute("data-id" , index);
        // Onclick the btn todo gets delete 
        span.addEventListener("click",function(){
            deleteTodo( event ,span);
        });

        // input checkbox gets checked when  the user dynamically 
        // click the  checkbox and it also  get updated in the array 
        input.addEventListener("change",function(){
            updateIsDone(event, p )
        });
        li.append( input,p,span );
        rootEle.append(li);

    })
    return rootEle;
};
// all todos 
allTodos.addEventListener('click',function(){
    createUi(alltodos,root);
})



// ui  of  the  active   button or all the  active  todos 
function activetodoUi(data,rootEle){
         rootEle.innerText = "";
         data.filter((todo,index)=>{
            let li = document.createElement('li');
            let input = document.createElement('input');
            input.type = "checkbox";
            let p= document.createElement('p');
            let span = document.createElement('span');
            let error = document.createElement('p');
            if(todo.isDone  === false){
                span.innerHTML = ` <i class="fas fa-window-close close-btn"></i>`;
                li.append( input,p,span );
                rootEle.append(li);

                p.innerText = todo.name;
                input.setAttribute("data-id" ,index);
                span.setAttribute("data-id" , index);     
               // input checkbox gets checked when  the user dynamically 
               // click the  checkbox and it also  get updated in the array 
                input.addEventListener("change",function(){
                    updateIsDone(event, p )
                });
                   // Onclick the btn todo gets delete 
                span.addEventListener("click",function(){
                   deleteTodo( event ,span);
                });
               
            }
            else{
                // li.append(error);
                error.innerText = "No Active Todo for Today";
            }

        });
    return rootEle;
};


function handleActivetodo(event){
    console.log(event.target);
    activetodoUi(alltodos,root);

}

activeTodo.addEventListener('click',handleActivetodo);

// Active  todos  Ends here 

//Completed Todos starts here 
function completedTodoUi(data,rootEle){
    rootEle.innerText = "";
    data.filter((todo,index)=>{
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = "checkbox";
        let p= document.createElement('p');
        let span = document.createElement('span');
        let error = document.createElement('p');
       if(todo.isDone  === true){
           span.innerHTML = ` <i class="fas fa-window-close close-btn"></i>`;
           li.append( input,p,span );
           rootEle.append(li);

           p.innerText = todo.name;
           input.setAttribute("data-id" ,index);
           span.setAttribute("data-id" , index);     
          // input checkbox gets checked when  the user dynamically 
          // click the  checkbox and it also  get updated in the array 
           input.addEventListener("change",function(){
               updateIsDone(event, p )
           });
              // Onclick the btn todo gets delete 
           span.addEventListener("click",function(){
              deleteTodo( event ,span);
           });
          
       }
       else{
           // li.append(error);
           error.innerText = "No Active Todo for Today";
       }

   });
return rootEle;
};
function handleCompletedtodo(event){
    
    console.log(event.target);
    completedTodoUi(alltodos,root);
}
compltedTodos.addEventListener('click',handleCompletedtodo);
//Completed Todos  ends here 

function handleEvent(event){
    let value = event.target.value;
    if(event.keyCode === 13 && event.target.value!==""){
        alltodos.push(
            {
                name: value,
                isDone :false
            }
        );
        event.target.value= "";
        createUi(alltodos,root);
    }

    localStorage.setItem(
    'todos',
    JSON.stringify(alltodos)
    );
}
createUi(alltodos,root);
userInput.addEventListener('keyup',handleEvent);

};

main();