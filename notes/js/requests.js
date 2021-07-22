let url = "/notes/jsoncontroller.php";

let random = Math.floor(Math.random() * 11);

export function signin(username,hideEl, showEl, inDivs, newNote){

    const data = new FormData();

    data.append('username', username);
    data.append('action', 'signin');

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response=>{
        if(response.ok){
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response=>response.json())
    .then(data=> {

        if(data['result'] == 1){

            // set the class name to one specified in cn
            hideEl.classList.add("hidden"); 
            hideEl.classList.remove("content"); 

            // set the class name to one specified in cn
            showEl.classList.add("content"); 
            showEl.classList.remove("hidden"); 

            // show following element
            newNote.classList.remove("hidden"); 
    
            inDivs[0].innerHTML = "Successfully signed in";

            // store in local storage
            localStorage.setItem('notes', JSON.stringify( data['notes']));


                        
        }else{
    
            inDivs[1].innerHTML = "Error!";
    
        }
        
    }) 
    .catch(error => (error))
}


export function signup(username, hideEl, infoDiv){

    const data = new FormData();

    data.append('username', username);
    data.append('action', 'signup');

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response=>{
        if(response.ok){
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response=>response.json())
    .then(data=> {

        if(data['result'] == 1){

            // set the class name to one specified in cn
            hideEl.classList.add("hidden"); 
    
            infoDiv.innerHTML = "Successfully signed up. Please sign in.";

                        
        }else{

            // set the class name to one specified in cn
            hideEl.classList.add("hidden"); 
    
            infoDiv.innerHTML = "Error: User already exists!";
    
        }
        
    })
    .catch(error => {
        console.log(error);

        // set the class name to one specified in cn
        hideEl.classList.add("hidden"); 
    })
}

export function addnote(note, title, username, infoDiv){

    const data = new FormData();

    data.append('note', note);
    data.append('username', username);
    data.append('title', title);
    data.append('action', 'add-note');

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response=>{
        if(response.ok){
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response=>response.json())
    .then(data=> {

        if(data['result'] == 1){
    
            infoDiv.innerHTML = "Successfully added note.";

                        
        }else{
    
            infoDiv.innerHTML = "Error: Note not added!";
    
        }
        
    })
    .catch(error => {
        console.log(error); })
}


export function quoter(heroText, author){

    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=famous", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7d9229cc24msh958e0dd8f82ab47p19f340jsn986b57c945d4",
            "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com"
        }
    })
    .then(response=>response.json())
    .then(data=> {

        heroText.innerHTML = data[random]['quote'];
        author.innerHTML = data[random]['auto'];


    })
    .catch(err => {
        console.error(err);
    });

}
