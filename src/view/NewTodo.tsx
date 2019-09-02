import * as React from 'react';

import { NewTodoViewModel } from '../view_model/new_todo_view_model';

export interface NewTodoProps {
    model: NewTodoViewModel
}

export interface NewTodoState {
    todoName: string;
}

export class NewTodo extends React.Component<NewTodoProps, NewTodoState> {
    constructor(props: NewTodoProps) {
        super(props);

        this.state = {
            todoName: ""
        };
    }

    render() {
        return (
            <div>
                <label>Add todo:</label>
                <input
                    type="text"
                    name="newTodo"
                    value={this.state.todoName}
                    onChange={(x) => this.setTodoName(x.target.value)}
                />
                <button
                    onClick={() => this.addTodo()}
                >
                    Add
                </button>
            </div>
        );
    }

    private addTodo() {
        this.props.model.addTodo(this.state.todoName);
        this.setState({
            todoName: ""
        });
    }

    private setTodoName(name: string) {
        this.setState({
            todoName: name
        });
    }
}
