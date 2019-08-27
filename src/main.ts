import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './view/App';
import { AppViewModel } from './view_model/app_view_model';
import { TodoApp } from './model/todo_app';

function main() {
    const model = new TodoApp();
    const viewModel = new AppViewModel(model);
    ReactDOM.render(
        React.createElement(App, {model: viewModel}), 
        document.getElementById('root')
    );
}

main();