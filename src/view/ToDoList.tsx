import * as React from 'react';

import { TodoListViewModel } from '../view_model/todo_list_view_model';

import { Todo } from './Todo';

export interface ToDoListProps {
    model: TodoListViewModel
}

export function ToDoList({model}: ToDoListProps): JSX.Element {
    return (
        <div>
            <ul>
                {model.getTodos().map((x) => <Todo key={x.name} model={x} />)}
            </ul>
        </div>
    );
}
