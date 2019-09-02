import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App, AppProps } from './view/App';
import { TodoApp } from './model/todo_app';
import { ViewModelFactory } from './view_model/view_model_factory';

function main() {
    const model = new TodoApp();
    const factory = new ViewModelFactory(model);

    model.getChangedObservable().subscribe((x) => {
        const appProps: AppProps = {
            factory,
            model: factory.getAppViewModel()
        }
        ReactDOM.render(
            React.createElement(App, appProps), 
            document.getElementById('root')
        );
    });

    model.getTodosList().addTodo("todo #1");
    model.getTodosList().addTodo("todo #2");
    model.getTodosList().addTodo("todo #3");
    model.getTodosList().addTodo("todo #4");
}

main();