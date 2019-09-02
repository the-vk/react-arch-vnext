import * as React from 'react';

import { TodoListViewModel } from '../view_model/todo_list_view_model';

import { NewTodo } from './NewTodo';
import { Todo } from './Todo';

export interface ToDoListProps {
    model: TodoListViewModel
}

export function TodoList({model}: ToDoListProps): JSX.Element {
    return (
        <div>
            <ul>
                {model.getTodos().map((x) => <React.Fragment key={x.name}>
                    <Todo model={x} />
                    <button onClick={() => model.deleteTodo(x.name)}>Delete</button>
                </React.Fragment>)}
            </ul>
            <NewTodo model={model}></NewTodo>
        </div>
    );
}
