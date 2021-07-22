import { signin} from "./requests.js";

export function showElement(clickedEl, shownEl, classAdded){

    // listen for when a button is clickedQ
    clickedEl.addEventListener('click', function(){
        
        // set the class name to one specified in cn
        shownEl.classList.add(classAdded); 

        // set the class name to one specified in cn
        shownEl.classList.remove("hidden"); 

    }, false);

}

export function hideElement(clickedEl, hideEl){

    // listen for when a button is clicked
    clickedEl.addEventListener('click', function(){

        // set the class name to one specified in cn
        hideEl.classList.add("hidden"); 
        
    }, false);

}

export function hideContent(clickedEl, hideEl, showContent, newNote){

    // listen for when a button is clicked
    clickedEl.addEventListener('click', function(){

        // hide following element
        hideEl.classList.add("hidden"); 
        hideEl.classList.remove("content"); 

        // show following element
        showContent.classList.add("content"); 
        showContent.classList.remove("hidden"); 

        // hide following element
        newNote.classList.add("hidden"); 

        localStorage.clear();

    }, false);

}

export function hidenSignin(username, hideEl, showEl, inDivs, newNote){

    signin(username, hideEl, showEl, inDivs, newNote);

}
