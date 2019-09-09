import * as React from 'react';
import { TodoViewModel } from '../view_model/todo_view_model';

export interface TodoProps {
    model: TodoViewModel;
}

export interface TodoState {
    isEditMode: boolean;
    inputValue: string;
}

export class Todo extends React.Component<TodoProps, TodoState> {
    private _editInputRef: React.RefObject<HTMLInputElement>;

    constructor(props: TodoProps) {
        super(props);

        this.state = {
            isEditMode: false,
            inputValue: ""
        };
        this._editInputRef = React.createRef<HTMLInputElement>();
    }

    render() {
        return this.state.isEditMode 
            ? this.renderEditable()
            : this.renderReadOnly();

    }

    private renderReadOnly() {
        return (
            <li>
                <span>{this.props.model.name}</span>
                &nbsp;
                <button onClick={() => this.setEditMode(true)}>
                    Edit
                </button>
            </li>
        );
    }

    private renderEditable() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.inputValue}
                    ref={this._editInputRef}
                    onChange={(e) => this.setInputValue(e.target.value)}
                    onBlur={() => this.setName(this.state.inputValue)}
                />
            </>
        );
    }

    private setEditMode(isEditMode: boolean) {
        this.setState({
            isEditMode,
            inputValue: isEditMode ? this.props.model.name : ""
        });
        if (isEditMode) {
            this._editInputRef.current.focus();
        }
    }

    private setInputValue(value: string) {
        this.setState({
            inputValue: value
        });
    }

    private setName(name: string) {
        this.props.model.setName(name);
        this.setEditMode(false);
    }
}
