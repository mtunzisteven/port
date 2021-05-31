import {save, load} from './ls.js';
import {displayTasks, displayActiveTasks, displayCompletedTasks} from './utilities.js';

export default class Todos{

    constructor(todoElement, text=''){
        let _text = text;
        this.todoElement = todoElement;
        this.getText = () => _text;
        this.setText = text => {
            return _text = text;
        };

    }

    saveTodo(todo){

        save(this.getText(), todo);

    }

    loadTodos(status, count){

        let data = load();

        if(status == 'all'){

            return displayTasks(this.todoElement, data, count);

        }else if(status == 'active'){

            return displayActiveTasks(this.todoElement, data, count);

        }else if(status == 'completed'){

            return displayCompletedTasks(this.todoElement, data, count);

        }

    }
}