export class Todo {
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
    }

    toggle() {
        this.completed = !this.completed;
        if (this.completed) {
            this.completedDate = new Date();
        }
    }
}