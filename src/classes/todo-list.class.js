import { Todo } from ".";


export class TodoList {

    todos;

    constructor() {
        this.cargarLocalStorage() 
        // this.todos = [];
    }


    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guadarLocalStorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guadarLocalStorage();
    }

    marcarCompletado( id ) {
        for ( let todo of this.todos ) {
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guadarLocalStorage();
                break;
            }
        }
    }


    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guadarLocalStorage();
    }

    guadarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos) ); 
    }

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo')) ? this.todos = JSON.parse(localStorage.getItem('todo')) : [];
        
        
        this.todos = this.todos.map( Todo.fromJson );
    }
}