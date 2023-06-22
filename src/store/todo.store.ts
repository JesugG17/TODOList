import { Todo } from '../todos/models/todo.model';

enum Filter {
    All = 'all',
    Completed = 'completed',
    Pending = 'pending'
};

interface State {
    todos: Todo[],
    filter: Filter
};

const state: State = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filter.All
};


export const initStore = () => {
    console.log(state);
    console.log('initStore');
}

export default {
    initStore
}