import * as React from 'react';
import { TodoViewModel } from '../view_model/todo_view_model';

export interface TodoProps {
    model: TodoViewModel;
}

export function Todo({model}: TodoProps): JSX.Element {
    return (
        <li>{model.name}</li>
    );
}