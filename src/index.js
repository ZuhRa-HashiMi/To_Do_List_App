import './style.css';

const list = document.querySelector('.list');
const inputTodo = document.querySelector('.add-todo');
const addTodoBtn = document.querySelector('.submit');

class TodoTask {
  constructor(desp, arr, done = false) {
    this.desp = desp;
    this.index = arr.length;
    this.done = done;
  }
}
class TaskLisk {
    constructor() {
      this.tasks = [];
    }
    saveTolocal() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    getFromLocal = () => {
        this.tasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];
      };
      renderTodo = (list) => {
        list.innerHTML = '';
        this.tasks.forEach((el, i) => {
          const item = document.createElement('li');
          item.classList.add('item');
          item.id = i;
          item.innerHTML = `
              <div class="left-itmes">
              <input type="checkbox" class="checkbox" ${el.done ? 'checked' : ''}>
              <input type='text' class='todo ${
                el.done ? 'line-through' : ''
              }' value='${el.desp}'>
              </div>
              <div>
              <i class="fa-solid fa-ellipsis-vertical icon-dots"></i>
              <i class="fa-solid fa-trash-can  icon-remove  hidden"></i>
              </div>
        `;