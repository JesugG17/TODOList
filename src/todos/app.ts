import { Filter } from '../store/enums/filter.enum';
import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos } from './use-cases/render-todos';

enum ElementIDs {
    APP = '#app',
    TODO_LIST = '.todo-list',
    INPUT = '#new-todo-input',
    CLEAR_COMPLETED = '.clear-completed',
    TODOS_COUNT = '#pending-count',
    TODO_FILTERS = '.filter'
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
    const clearCompleted = document.querySelector(ElementIDs.CLEAR_COMPLETED) as HTMLButtonElement;
    const todosCount = document.querySelector(ElementIDs.TODOS_COUNT) as HTMLSpanElement;
    const filtersUL = document.querySelectorAll(ElementIDs.TODO_FILTERS) as NodeListOf<HTMLAnchorElement>;

    todosCount.textContent = todoStore.getTodos(Filter.Pending).length.toString();

    newDescriptionInput.addEventListener('keyup', (event: KeyboardEvent) => {
        if (event.key === 'Enter' && newDescriptionInput.value.length > 0) {
            const newTodo = new Todo(newDescriptionInput.value);
            todoStore.createTodo( newTodo )
            todosCount.textContent = todoStore.getTodos(Filter.Pending).length.toString();
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
        todosCount.textContent = todoStore.getTodos(Filter.Pending).length.toString();
        displayTodos();
    });

    todoListUL.addEventListener('click', (event: Event) => {
        const isDestroyButton = (event.target as HTMLElement).className === 'destroy';
        if (!isDestroyButton) return;

        const element = (event.target as HTMLElement).closest('[data-id]');
        if (!element) throw new Error('Element not found');

        const todoId = element.getAttribute('data-id') as string;
        todoStore.deleteTodo( todoId );
        todosCount.textContent = todoStore.getTodos(Filter.Pending).length.toString();
        displayTodos();
    });

    clearCompleted.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });
   
    filtersUL.forEach( element => {
        element.addEventListener('click', () => {
            filtersUL.forEach( element => element.classList.remove('selected'));
            element.classList.add('selected');
            
            todoStore.setFilter(Filter[element.textContent as keyof typeof Filter]);

            displayTodos();
        });
    })

}