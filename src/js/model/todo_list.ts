import { BehaviorSubject, Observable } from 'rxjs';

import { Todo } from "./todo";

export class TodoList {
    private stateEventSubject: BehaviorSubject<TodoList>;
    private todos: Todo[];

    constructor() {
        this.todos = [];
        this.stateEventSubject = new BehaviorSubject<TodoList>(this);
    }

    getStateEventChannel(): Observable<TodoList> {
        return this.stateEventSubject;
    }

    getTodos(): Todo[] {
        return [...this.todos];
    }

    getTodo(name: string): Todo {
        return this.todos.filter(x => x.name == name).pop();
    }

    addTodo(name: string): void {
        if (this.getTodo(name) == undefined) {
            this.todos.push(new Todo(name));
            this.stateEventSubject.next(this);
        }
    }

    toggleTodo(name: string): void {
        const todo = this.getTodo(name);
        if (todo != undefined) {
            todo.toggle();
            this.stateEventSubject.next(this);
        }
    }

    deleteTodo(name: string): void {
        if (this.getTodo(name) != undefined) {
            this.todos = this.todos.filter(x => x.name != name);
            this.stateEventSubject.next(this);
        }
    }
}
