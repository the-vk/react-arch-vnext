import { TodoList } from '../model/todo_list';

import { NewTodoViewModel } from './new_todo_view_model';
import { TodoViewModel } from './todo_view_model';

export class TodoListViewModel {
    private _todoList: TodoList;

    constructor(todoList: TodoList) {
        this._todoList = todoList;
    }

    getTodos(): TodoViewModel[] {
        return this._todoList.getTodos();
    }

    addTodo(name: string): void {
        this._todoList.addTodo(name);
    }

    deleteTodo(name: string): void {
        this._todoList.deleteTodo(name);
    }
}
