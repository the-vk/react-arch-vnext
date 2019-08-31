import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './view/App';
import { AppViewModel } from './view_model/app_view_model';
import { TodoApp } from './model/todo_app';

function main() {
    const model = new TodoApp();

    model.getChangedObservable().subscribe((x) => {
        const viewModel = new AppViewModel(x);
        ReactDOM.render(
            React.createElement(App, {model: viewModel}), 
            document.getElementById('root')
        );
    });

    model.getTodosList().addTodo("todo #1");
    model.getTodosList().addTodo("todo #2");
    model.getTodosList().addTodo("todo #3");
    model.getTodosList().addTodo("todo #4");
}

main();