import Todos from './toDo.js';

let form = document.forms[0]; // the new task form
let todoElements = document.querySelector('#todo-elements'); // the task container
let all = document.querySelector('#all'); // the task container
let active = document.querySelector('#active'); // the task container
let completed = document.querySelector('#completed'); // the task container
let count = document.querySelector('#tasks-left'); // the number of tasks not completed


const todoArray = [];

const todo = new Todos(todoElements); // create instance of Todo class

//todo.loadTodos('all', count); // display tasks

form.addEventListener('submit', function(event){

    event.preventDefault();

    let taskText = form['new-task'].value; // text input

    todo.setText(taskText)

    todo.saveTodo(todoArray);

    todo.loadTodos('all', count); 

});

all.addEventListener('click', function(){

    todo.loadTodos('all', count);   
    
});

active.addEventListener('click', function(){

    todo.loadTodos('active', count);  
    
});

completed.addEventListener('click', function(){

    todo.loadTodos('completed', count);   

});

