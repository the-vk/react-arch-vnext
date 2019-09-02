import { TodoListViewModel } from "./todo_list_view_model";
import { TodoApp } from "../model/todo_app";

export class AppViewModel {
    private _model: TodoApp;

    constructor(model: TodoApp) {
        this._model = model;
    }

    getTodosList(): TodoListViewModel {
        return new TodoListViewModel(this._model.getTodosList());
    }
}
