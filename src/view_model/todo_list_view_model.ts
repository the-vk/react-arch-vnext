import { TodoViewModel } from './todo_view_model';

export interface TodoListViewModel {
    getTodos(): TodoViewModel[];

    addTodo(name: string): void;
    deleteTodo(name: string): void;
}