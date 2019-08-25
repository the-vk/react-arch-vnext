import { EventChannels } from './event_chanels';
import { TodoList } from './todo_list';
import { Observable } from 'rxjs';

export class TodoApp implements EventChannels {
    todoList: TodoList;
    
    constructor() {
        this.todoList = new TodoList();
    }
    
    getModelStateChannel(): Observable<TodoList> {
        return this.todoList.getStateEventChannel();
    }
}
