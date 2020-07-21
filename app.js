// selectors
const filmInput = document.querySelector(".film-input");
const filmButton = document.querySelector(".film-button");
const filmList = document.querySelector(".film-list");

//event listeners
document.addEventListener("DOMContentLoaded", getfilms);
filmButton.addEventListener('click', addfilm);
filmList.addEventListener('click', deleteCheck);
//functions
function addfilm(event){
    //Prevent form from submitting
    event.preventDefault();
    const filmDiv = document.createElement('div');
    filmDiv.classList.add("film");
    // create a LI
    const newfilm = document.createElement('li');
    newfilm.innerText = filmInput.value;
    newfilm.classList.add("film-item");
    filmDiv. appendChild(newfilm);
    //Add film to local storaage
    saveLocalfilms(filmInput.value);
    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add('complete-btn');
    filmDiv.appendChild(completedButton);
    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add('trash-btn');
    filmDiv.appendChild(trashButton);
    //APPEND TO LIST
    filmList.appendChild(filmDiv);
    // clear the film
    filmInput.value = "";
}


function deleteCheck(e){
    const item = e.target;
    title = e.path[2].innerText
    //delete film
    if(item.classList[0] === "trash-btn")
    {
        const film = item.parentElement;
        film.classList.add("fall");
        removeLocalfilms(film);
        film.addEventListener("transitionend", function(){
            film.remove();
        })
    }

    //Check mark
    if(item.classList[0] === "complete-btn")
    {
        const film = item.parentElement;
        film.classList.toggle("completed");
    }
}

function saveLocalfilms(film){
    //Check is there a film folder
    let films;
    if(localStorage.getItem('films') === null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem('films'));
    }
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));
}

function getfilms(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(film){
        event.preventDefault();
        const filmDiv = document.createElement('div');
        filmDiv.classList.add("film");
        // create a LI
        const newfilm = document.createElement('li');
        newfilm.innerText = film;
        newfilm.classList.add("film-item");
        filmDiv. appendChild(newfilm);
        // CHECK MARK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add('complete-btn');
        filmDiv.appendChild(completedButton);
        // TRASH BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = "<i class='fas fa-trash'></i>";
        trashButton.classList.add('trash-btn');
        filmDiv.appendChild(trashButton);
        //APPEND TO LIST
        filmList.appendChild(filmDiv);
    });
}

function removeLocalFilms(film){
    let films;
    if(localStorage.getItem('films') === null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem('films'));
    }
    const filmIndex = film.children[0].innerText;
    films.splice(films.indexOf(filmIndex), 1);
    localStorage.setItem("films", JSON.stringify(films));
}