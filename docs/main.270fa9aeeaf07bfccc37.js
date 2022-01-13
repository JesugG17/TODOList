(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{L:()=>h});var n=function(){function e(){var t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=void 0,(r="todos")in(t=this)?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,this.cargarLocalStorage()}var r,n,a;return r=e,(n=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guadarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guadarLocalStorage()}},{key:"marcarCompletado",value:function(e){var r,o=t(this.todos);try{for(o.s();!(r=o.n()).done;){var n=r.value;if(n.id==e){n.completado=!n.completado,this.guadarLocalStorage();break}}}catch(e){o.e(e)}finally{o.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guadarLocalStorage()}},{key:"guadarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(c.fromJson)}}])&&o(r.prototype,n),a&&o(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();function a(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=i((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"tarea",void 0),l(this,"id",void 0),l(this,"completado",void 0),l(this,"creado",void 0),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}));function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}l(c,"fromJson",(function(e){var t=e.tarea,r=e.id,o=e.completado,n=e.creado,a=new c(t);return a.id=r,a.completado=o,a.creado=n,a}));var s=document.querySelector(".todo-list"),f=document.querySelector(".new-todo"),v=document.querySelector(".clear-completed"),m=document.querySelector(".filters"),y=document.querySelectorAll(".filtro"),p=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n            <label>").concat(e.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),r=document.createElement("div");return r.innerHTML=t,s.append(r.firstElementChild),r.firstElementChild};f.addEventListener("keyup",(function(e){if(13===e.keyCode&&f.value.length>0){console.log(f.value);var t=new c(f.value);h.nuevoTodo(t),p(t),f.value=""}})),s.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,o=r.getAttribute("data-id");t.includes("input")?(h.marcarCompletado(o),r.classList.toggle("completed")):t.includes("button")&&(h.eliminarTodo(o),s.removeChild(r))})),v.addEventListener("click",(function(){var e=document.querySelectorAll(".completed");h.eliminarCompletados();var t,r=u(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;s.removeChild(o)}}catch(e){r.e(e)}finally{r.f()}})),m.addEventListener("click",(function(e){var t=e.target.text;if(t){y.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var r,o=u(s.children);try{for(o.s();!(r=o.n()).done;){var n=r.value;n.classList.remove("hidden");var a=n.classList.contains("completed");switch(t){case"Pendientes":a&&n.classList.add("hidden");break;case"Completados":a||n.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}}));var h=new n;h.todos.forEach(p),console.log(h.todos)})();