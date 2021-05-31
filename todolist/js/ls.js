let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes();

let EntryDate = date+' '+time;


// taskText is the text input
export function save(taskText, todo){


    const eachTask = {
        'id': EntryDate,
        'content':taskText,
        'completed' : false
    };

    todo.push(eachTask);

    localStorage.setItem('tasks', JSON.stringify(todo));

}

// taskText is the text input
export function load(){

    let data = JSON.parse(localStorage.getItem('tasks'));

    return data;

}



  


