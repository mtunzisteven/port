export function displayTasks(todoElements, todo, count){

    let number= 0;

    todoElements.innerHTML = ''; // remove all children of todoElements

    for(let i = 0; i < todo.length; i++){

        let checkbox = document.createElement('INPUT'); // create checkbox element
        let label = document.createElement('SPAN'); // create span element
        let close = document.createElement('I'); // create icon element

        let task = document.createElement('DIV'); // create the task holder div element

        task.setAttribute('class', 'task'); // set task class attribute to task div
       
        todoElements.appendChild(task); // add task under task holder

        close.addEventListener('click', function(){
        
            if(!todo[i]['completed']){

                number -= 1;

                count.innerHTML = number;
    
            }

            task.style.display = 'none'; // remove element from view
            
            todo.splice(i, 1); // remove the element in the array, but not in local storage

            localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element

        }, false);

        task.appendChild(checkbox);  // add input as child of div.task 
        task.appendChild(label);  // add span as child of div.task 
        task.appendChild(close);  // add icon as child of div.task

        let dateText = todo[i]['id'];

        checkbox.setAttribute('type', 'checkbox'); // specify checkbox type
        checkbox.setAttribute('name', dateText); // make the name the date
        checkbox.setAttribute('id', dateText);   // make the id the date
        checkbox.setAttribute('class', 'check');   // make the id the date

        checkbox.addEventListener('click', function(){
                    
            if(checkbox.checked){

                number-= 1;

                todo[i]['completed'] = true; // remove the element in the array, but not in local storage

                localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element

                count.innerHTML = number;

            }else{

                number+= 1;

                todo[i]['completed'] = false; // remove the element in the array, but not in local storage

                localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element

                count.innerHTML = number;

            }

        }, false);

        // specify classes for corresponding font awesome icon
        close.setAttribute('class', 'fa fa-times');

        if(todo[i]['completed']){

            checkbox.checked = true; // set to checked 

        }else{
            number+= 1;

        }

        label.innerHTML = todo[i]['content']; // add text content to label


    }

    count.innerHTML = number;


}


export function displayActiveTasks(todoElements, todo, count){

    let number = 0;

    todoElements.innerHTML = ''; // remove all children of todoElements

    for(let i = 0; i < todo.length; i++){

        if(!todo[i]['completed']){

            number += 1;

            let checkbox = document.createElement('INPUT'); // create checkbox element
            let label = document.createElement('SPAN'); // create span element
            let close = document.createElement('I'); // create icon element
    
            let task = document.createElement('DIV'); // create the task holder div element
    
            task.setAttribute('class', 'task'); // set task class attribute to task div
           
            todoElements.appendChild(task); // add task under task holder
    
            close.addEventListener('click', function(){
            
                if(!todo[i]['completed']){

                    number -= 1;

                    count.innerHTML = number;

                }

                task.style.display = 'none'; // remove element from view
                
                todo.splice(i, 1); // remove the element in the array, but not in local storage
    
                localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element
    
            }, false);
    
            task.appendChild(checkbox);  // add input as child of div.task 
            task.appendChild(label);  // add span as child of div.task 
            task.appendChild(close);  // add icon as child of div.task
    
            let dateText = todo[i]['id'];
    
            checkbox.setAttribute('type', 'checkbox'); // specify checkbox type
            checkbox.setAttribute('name', dateText); // make the name the date
            checkbox.setAttribute('id', dateText);   // make the id the date
            checkbox.setAttribute('class', 'check');   // make the id the date

    
            checkbox.addEventListener('change', function(event){
                        
                if(event.target.checked){

                    number-= 1;

                    count.innerHTML = number;

                    todo[i]['completed'] = true; // remove the element in the array, but not in local storage
    
                    localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element

                }else{

                    number+= 1;

                    count.innerHTML = number;
    
                    todo[i]['completed'] = false; // remove the element in the array, but not in local storage
    
                    localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element
    

                }
    
            }, false);
    
    
            // specify classes for corresponding font awesome icon
            close.setAttribute('class', 'fa fa-times');

            label.innerHTML = todo[i]['content']; // add text content to label  

        }
    }
    count.innerHTML = number;

}


export function displayCompletedTasks(todoElements, todo, count){

    let number = 0;

    todoElements.innerHTML = ''; // remove all children of todoElements

    for(let i = 0; i < todo.length; i++){

        if(todo[i]['completed']){

            let checkbox = document.createElement('INPUT'); // create checkbox element
            let label = document.createElement('SPAN'); // create span element
            let close = document.createElement('I'); // create icon element
    
            let task = document.createElement('DIV'); // create the task holder div element
    
            task.setAttribute('class', 'task'); // set task class attribute to task div
           
            todoElements.appendChild(task); // add task under task holder
    
            close.addEventListener('click', function(){

                if(!todo[i]['completed']){

                    number -= 1;
                    
                    count.innerHTML = number;

                }
            
                task.style.display = 'none'; // remove element from view
                
                todo.splice(i, 1); // remove the element in the array, but not in local storage
    
                localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element


    
            }, false);
    
            task.appendChild(checkbox);  // add input as child of div.task 
            task.appendChild(label);  // add span as child of div.task 
            task.appendChild(close);  // add icon as child of div.task
    
            let dateText = todo[i]['id'];
    
            checkbox.setAttribute('type', 'checkbox'); // specify checkbox type
            checkbox.setAttribute('name', dateText); // make the name the date
            checkbox.setAttribute('id', dateText);   // make the id the date
            checkbox.setAttribute('class', 'check');   // make the id the date
    
            checkbox.addEventListener('change', function(event){
                        
                if(event.target.checked){
    
                    number-= 1;

                    count.innerHTML = number;

                    todo[i]['completed'] = true; // remove the element in the array, but not in local storage
    
                    localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element
    

                }else{
    
                    number+= 1;

                    count.innerHTML = number;

                    todo[i]['completed'] = false; // remove the element in the array, but not in local storage
    
                    localStorage.setItem('tasks', JSON.stringify(todo)); // save the new array without the deleted element
    
                }
    
            }, false);
    
    
            // specify classes for corresponding font awesome icon
            close.setAttribute('class', 'fa fa-times');
    
    
            checkbox.checked = true; // set to checked 
        
    
            label.innerHTML = todo[i]['content']; // add text content to label
        

        } else{
            count += 1;
        }     

    }

    count.innerHTML = number;

}