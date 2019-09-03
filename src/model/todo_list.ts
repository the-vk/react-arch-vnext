import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { endWith, mapTo, mergeAll } from 'rxjs/operators';


import { ObservableModel } from './observable_model';
import { Todo } from "./todo";
import { TimestampModel } from './timestamp_model';
import { generateTimestamp } from '../helpers/timestamp';

export class TodoList implements ObservableModel<TodoList>, TimestampModel {
    private _timestamp: string;
    private _changedSubject: BehaviorSubject<TodoList>;
    
    getChangedObservable() {
        return of(
            this._changedSubject,
            this._todosChangedStream.pipe(mergeAll(), mapTo(this))
        ).pipe(mergeAll());
    }

    private _todosChangedStream: Subject<Observable<Todo>>;

    private todos: Todo[];

    constructor() {
        this.todos = [];
        this._changedSubject = new BehaviorSubject<TodoList>(this);
        this._todosChangedStream = new Subject<Observable<Todo>>();
        this.getChangedObservable().subscribe((x) => {
            this._timestamp = generateTimestamp();
        })
    }

    getTimestamp() {
        return this._timestamp;
    }

    getTodos(): Todo[] {
        return [...this.todos];
    }

    getTodo(name: string): Todo {
        return this.todos.filter(x => x.name == name).pop();
    }

    addTodo(name: string): void {
        if (this.getTodo(name) == undefined) {
            const newTodo = new Todo(name);
            this.todos.push(newTodo);
            this._todosChangedStream.next(
                newTodo.getChangedObservable().pipe(endWith(null))
            );
        }
    }

    toggleTodo(name: string): void {
        const todo = this.getTodo(name);
        if (todo != undefined) {
            todo.toggle();
        }
    }

    deleteTodo(name: string): void {
        const todo = this.getTodo(name);
        if (todo != undefined) {
            this.todos = this.todos.filter(x => x.name != todo.name);
            todo.destroy();
        }
    }
}
