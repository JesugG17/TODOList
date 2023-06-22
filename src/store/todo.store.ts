import { Todo } from '../todos/models/todo.model';
import { Filter } from './enums/filter.enum';

interface State {
    todos: Todo[],
    filter: Filter
};

const state: State = {
    todos: [],
    filter: Filter.All
};

export const initStore = () => {
    loadStore();
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
    const loadedState: State = JSON.parse(localStorage.getItem('state') ?? JSON.stringify(state));
    state.todos = [...loadedState.todos];
    state.filter = loadedState.filter; 
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const createTodo = ( todo: Todo ) => {
    if (todo.description.trim().length === 0) {
        throw new Error('The description is required');
    }
    state.todos.push( todo );
    saveStateToLocalStorage();
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
    });
    saveStateToLocalStorage();
}

const deleteTodo = ( todoId: string ) => {
    state.todos = state.todos.filter( todo => todo.todoId !== todoId );
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
    saveStateToLocalStorage();
}

const setFilter = ( filter: Filter = Filter.All ) => {
    state.filter = filter;
    saveStateToLocalStorage();
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