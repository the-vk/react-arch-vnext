import { EventChannels } from './event_chanels';
import { TodoList } from './todo_list';
import { Observable } from 'rxjs';

export class TodoApp implements EventChannels {
    private _todoList: TodoList;

    get todoList(): TodoList {
        return this._todoList;
    }
    
    constructor() {
        this._todoList = new TodoList();
    }
    
    getModelStateChannel(): Observable<TodoList> {
        return this._todoList.getStateEventChannel();
    }
}
