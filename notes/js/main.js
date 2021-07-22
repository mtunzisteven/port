import { showElement, hideElement, hideContent, hidenSignin} from "./hideshow.js";
import { signup, quoter} from "./requests.js";

// buttons to clicked to show
const signupButton = document.querySelector('#signup-button');
const loginButton = document.querySelector('#login-button');
const closeSignin = document.querySelector('#close-signin');
const closeSignup = document.querySelector('#close-signup');
const signoutButton = document.querySelector('#signout-button');

// inforamational element
let infoDiv = document.querySelector('#infodiv');
let infoDivb = document.querySelector('#infodivb');

const inDivs = [infoDivb, infoDiv];


// elements shown by clicking button
let signupForm = document.querySelector('#sign-up');
let signinForm = document.querySelector('#sign-in');
let content2 = document.querySelector('#content2');
let content = document.querySelector('#content');
let newNote = document.querySelector('#new-note');
let notesParent = document.querySelector('#notes-container');

let quote = document.querySelector('#hero-quote');
let author = document.querySelector('#hero-author');

quoter(quote, author);

// show pop up sign in form on button click
showElement(loginButton, signinForm, 'popup');

// show pop up sign up form on button click
showElement(signupButton, signupForm, 'popup');

// hide form on button click
hideElement(closeSignin, signinForm);
hideElement(closeSignup, signupForm);
hideContent(signoutButton, content2, content, newNote);

// sign in
signinForm['submit'].addEventListener('click',function(){
    
    hidenSignin(signinForm['userName'].value, content, content2, inDivs, newNote);

}, false);

// sign up
signupForm['submit'].addEventListener('click',function(){

    signup(signupForm['userName'].value, signupForm, infoDiv);

}, false);



// show notes
if(JSON.parse(localStorage.getItem('notes')) !== null){

        
    // set the class name to one specified in cn
    content.classList.add("hidden"); 
    content.classList.remove("content"); 

    // set the class name to one specified in cn
    content2.classList.add("content"); 
    content2.classList.remove("hidden"); 

    // show following element
    newNote.classList.remove("hidden"); 


    for(let j = 0; j < JSON.parse(localStorage.getItem('notes'))['username'][1].length; j++){

        let noteCard = document.createElement('div'); 
        noteCard.setAttribute("class", "note-card");

        let note = document.createElement('div'); 
        note.setAttribute("class", "notes");
        note.innerHTML = JSON.parse(localStorage.getItem('notes'))['username'][1][j][1];

        let title = document.createElement('h4'); 
        title.setAttribute("class", "titles");
        title.innerHTML = JSON.parse(localStorage.getItem('notes'))['username'][1][j][0];

        noteCard.appendChild(note);
        noteCard.appendChild(title);
        notesParent.appendChild(noteCard);
    }

}

