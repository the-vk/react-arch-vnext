import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { ObservableModel } from './observable_model';
import { TodoList } from './todo_list';

export class TodoApp implements ObservableModel<TodoApp> {
    private _todoList: TodoList;
    public getTodosList(): TodoList {
        return this._todoList;
    }

    getChangedObservable(): Observable<TodoApp> {
        return this._todoList.getChangedObservable().pipe(
            mapTo(this)
        );
    }
    
    constructor() {
        this._todoList = new TodoList();
    }
}
