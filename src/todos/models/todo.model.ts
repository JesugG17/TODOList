

export class Todo {
    
    private description: string;
    private todoId: number;
    private done: boolean;
    private createdAt: Date;

    constructor(description: string) {
        this.todoId = 1;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }

}