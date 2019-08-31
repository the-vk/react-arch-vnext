import * as React from 'react';

import { AppViewModel } from "../view_model/app_view_model"
import { TodoList } from './TodoList';

export interface AppProps {
    model: AppViewModel;
}

export function App({model}: AppProps): JSX.Element {
    return (<>
        <h1>ToDo App - React vNext Architecture</h1>
        <TodoList model={model.getTodosList()}></TodoList>
    </>);
}
