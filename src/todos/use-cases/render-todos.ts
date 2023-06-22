import { createTodoHTML } from './';
import { Todo } from '../models/todo.model';

let rootElement: HTMLElement | null;

export const renderTodos = ( elementId: string, todos: Todo[] ) => {

    if (!rootElement) {
        rootElement = document.querySelector(elementId);
    }

    if (!rootElement) throw new Error('Element not found');

    rootElement.innerHTML = '';

    todos.forEach( todo => {
        rootElement?.append( createTodoHTML(todo) );
    })

}