import * as React from 'react';

import { AppViewModel } from "../view_model/app_view_model"
import { ToDoList } from './ToDoList';

export interface AppProps {
    model: AppViewModel;
}

export function App({model}: AppProps): JSX.Element {
    return (<>
        <h1>ToDo App - React vNext Architecture</h1>
        <ToDoList model={model.getTodosList()}></ToDoList>
    </>);
}
