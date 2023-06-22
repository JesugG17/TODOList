import { Todo } from '../todos/models/todo.model';
import { Filter } from './enums/filter.enum';

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

const getTodos = ( filter: Filter = Filter.All ) => {
    switch( filter ) {
        case Filter.All:
            return [...state.todos];
        case Filter.Completed:
            return state.todos.filter( todo => todo.done );
        case Filter.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const createTodo = ( todo: Todo ) => {
    if (todo.description.trim().length === 0) {
        throw new Error('The description is required');
    }
    state.todos.push( todo );
}

const toggleTodo = ( todoId: string ) => {
    state.todos = state.todos.map( todo => {
        if (todo.todoId === todoId) {
            return {
                ...todo,
                done: !todo.done
            } 
        }
        return todo;
    })
}

const deleteTodo = ( todoId: string ) => {
    state.todos = state.todos.filter( todo => todo.todoId !== todoId );
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

const setFilter = ( filter: Filter = Filter.All ) => {
    state.filter = filter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    createTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}