import './style.css'
import { App } from './todos/app';
import Store from './store/todo.store'


Store.initStore();
App('#app');
