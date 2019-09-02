import { TodoApp } from "../model/todo_app";
import { AppViewModel } from "./app_view_model";
import { TodoListViewModel } from "./todo_list_view_model";
import { NewTodoViewModel } from "./new_todo_view_model";

export class ViewModelFactory {
    private _model: TodoApp;

    constructor(model: TodoApp) {
        this._model = model;
    }

    getAppViewModel(): AppViewModel {
        return new AppViewModel(this._model);
    }

    getTodoListViewModel(): TodoListViewModel {
        return new TodoListViewModel(this._model.getTodosList());
    }

    getNewTodoViewModel(): NewTodoViewModel {
        return this.getTodoListViewModel();
    }
}
