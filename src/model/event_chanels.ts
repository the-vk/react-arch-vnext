import { Observable } from 'rxjs';

import { TodoList } from './todo_list';

export interface EventChannels {
    getModelStateChannel(): Observable<TodoList>;
}
