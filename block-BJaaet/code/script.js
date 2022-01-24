let movieBox  = document.querySelector('form');
// let movieInput = document.querySelector('moviename');

function handleEvent(event){
    event.preventDefault();
    let movieList = document.createElement('div');
    movieList.classList.add('movielist');       
    let checkbox = document.createElement(`input`);
    checkbox.setAttribute("type" , "checkbox");
    console.log(checkbox);
    checkbox.checked = false;
    movieList.append(checkbox);
    let addMovieName = document.createElement('label');
    movieList.append(addMovieName);
    addMovieName.prepend(checkbox);
    addMovieName.innerHTML = event.target.moviename.value;
    movieBox.append(addMovieName);
}
movieBox.addEventListener('submit',handleEvent);