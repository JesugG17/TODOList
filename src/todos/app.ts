import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos } from './use-cases/render-todos';

enum ElementIDs {
    APP = '#app',
    TODO_LIST = '.todo-list',
    INPUT = '#new-todo-input',
}

export const App = (elementId: string) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TODO_LIST, todos)
    }

    // Se llamara cuando la funcion app se llama
    (() => { 
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId)?.append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.INPUT) as HTMLInputElement;
    const todoListUL = document.querySelector(ElementIDs.TODO_LIST) as HTMLUListElement;

    newDescriptionInput.addEventListener('keyup', (event: KeyboardEvent) => {
        if (event.key === 'Enter' && newDescriptionInput.value.length > 0) {
            const newTodo = new Todo(newDescriptionInput.value);
            todoStore.createTodo( newTodo )
            displayTodos();
            newDescriptionInput.value = '';
        }
    });

    todoListUL.addEventListener('click', (event: Event) => {
        const isToggleButton = (event.target as HTMLElement).className === 'toggle';
        if (!isToggleButton) return;
        const element = (event.target as HTMLElement).closest('[data-id]');
        if (!element) throw new Error('Element not found');

        const todoId = element.getAttribute('data-id') as string;
        todoStore.toggleTodo ( todoId );
        displayTodos();
    });

    todoListUL.addEventListener('click', (event: Event) => {
        const isDestroyButton = (event.target as HTMLElement).className === 'destroy';
        if (!isDestroyButton) return;

        const element = (event.target as HTMLElement).closest('[data-id]');
        if (!element) throw new Error('Element not found');

        const todoId = element.getAttribute('data-id') as string;
        todoStore.deleteTodo( todoId );
        displayTodos();
    });


    todoListUL.addEventListener('dblclick', (event: Event) => {
        console.log(event.target);
    });

   
}