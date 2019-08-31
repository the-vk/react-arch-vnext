import { Observable } from 'rxjs';

export interface ObservableModel<T> {
    getChangedObservable(): Observable<T>;
}
