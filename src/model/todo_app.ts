import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { ObservableModel } from './observable_model';
import { TimestampModel } from './timestamp_model';
import { TodoList } from './todo_list';
import { generateTimestamp } from '../helpers/timestamp';

export class TodoApp implements ObservableModel<TodoApp>, TimestampModel {
    private _timestamp: string;
    private _todoList: TodoList;
    public getTodosList(): TodoList {
        return this._todoList;
    }

    getChangedObservable(): Observable<TodoApp> {
        return this._todoList.getChangedObservable().pipe(
            mapTo(this)
        );
    }

    getTimestamp(): string {
        return this._timestamp;
    }
    
    constructor() {
        this._todoList = new TodoList();

        this.getChangedObservable().subscribe(x => {
            this._timestamp = generateTimestamp();
        });
    }
}
