import { BehaviorSubject } from 'rxjs';

import { ObservableModel } from './observable_model';

export class Todo implements ObservableModel<Todo> {
    private _changedObservable: BehaviorSubject<Todo>;
    getChangedObservable() {
        return this._changedObservable;
    }

    name: string;
    completed: boolean;
    createdDate: Date;
    completedDate: Date;

    constructor(
        name: string, 
        completed?: boolean, 
        createdDate?: Date, 
        completedDate?: Date
    ) {
        this.name = name;
        this.completed = completed;
        this.createdDate = createdDate === null ? new Date() : createdDate;
        this.completedDate = this.completed ? completedDate : null;

        this._changedObservable = new BehaviorSubject<Todo>(this);
    }

    destroy() {
        this._changedObservable.complete();
    }

    toggle() {
        this.completed = !this.completed;
        if (this.completed) {
            this.completedDate = new Date();
        }

        this._changedObservable.next(this);
    }
}
