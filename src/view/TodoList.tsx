import * as React from 'react';

import { TodoListViewModel } from '../view_model/todo_list_view_model';

import { NewTodo } from './NewTodo';
import { Todo } from './Todo';
import { ViewModelFactory } from '../view_model/view_model_factory';

export interface ToDoListProps {
    factory: ViewModelFactory,
    model: TodoListViewModel
}

export function TodoList({factory, model}: ToDoListProps): JSX.Element {
    return (
        <div>
            <ul>
                {model.getTodos().map((x) => <React.Fragment key={x.name}>
                    <Todo model={x} />
                    <button onClick={() => model.deleteTodo(x.name)}>Delete</button>
                </React.Fragment>)}
            </ul>
            <NewTodo model={factory.getNewTodoViewModel()}></NewTodo>
        </div>
    );
}
