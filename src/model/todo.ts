import { BehaviorSubject } from 'rxjs';

import { ObservableModel } from './observable_model';
import { TimestampModel } from './timestamp_model';
import { generateTimestamp } from '../helpers/timestamp';

export class Todo implements ObservableModel<Todo>, TimestampModel {
    private _timestamp: string;

    private _changedObservable: BehaviorSubject<Todo>;
    getChangedObservable() {
        return this._changedObservable;
    }

    getTimestamp() {
        return this._timestamp;
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

        this.getChangedObservable().subscribe((x) => {
            this._timestamp = generateTimestamp();
        });
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
