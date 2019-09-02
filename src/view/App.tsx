import * as React from 'react';

import { AppViewModel } from "../view_model/app_view_model"
import { TodoList } from './TodoList';
import { ViewModelFactory } from '../view_model/view_model_factory';

export interface AppProps {
    factory: ViewModelFactory,
    model: AppViewModel;
}

export function App({factory}: AppProps): JSX.Element {
    return (<>
        <h1>ToDo App - React vNext Architecture</h1>
        <TodoList
            factory={factory}
            model={factory.getTodoListViewModel()} 
        />
    </>);
}
