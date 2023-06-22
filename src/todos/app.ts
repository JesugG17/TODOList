import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases/render-todos';

enum ElementIDs {
    APP = '#app',
    TODO_LIST = '.todo-list',
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
}