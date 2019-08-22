import { Todo } from "./todo";

export class TodoApp {

    private todos: Todo[];

    constructor() {
        this.todos = [];
    }

    getTodos(): Todo[] {
        return [...this.todos];
    }

    getTodo(name: string): Todo {
        return this.todos.filter(x => x.name == name).pop();
    }

    addTodo(name: string): void {
        if (this.getTodo(name) != undefined) {
            this.todos.push(new Todo(name));
        }
    }

    toggleTodo(name: string): void {
        const todo = this.getTodo(name);
        if (todo != undefined) {
            todo.toggle();
        }
    }

    deleteTodo(name: string): void {
        this.todos = this.todos.filter(x => x.name != name);
    }
}