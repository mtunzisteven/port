import { addnote} from "./requests.js";


let noteForm = document.querySelector('#note-form');
let infoDiv = document.querySelector('#infodiv');

let username = JSON.parse(localStorage.getItem('notes'))['username'][0];

noteForm['notebutton'].addEventListener('click', function(){

    addnote(noteForm['note'].value, noteForm['title'].value, username, infoDiv);

}, false);