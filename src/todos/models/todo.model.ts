import { v4 as uuid } from 'uuid';

export class Todo {
    
    public description: string;
    public todoId: string;
    public done: boolean;
    public createdAt: Date;

    constructor(description: string) {
        this.todoId = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }

}