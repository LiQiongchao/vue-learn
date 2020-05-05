
/**
 * 封闭存储的方法。
 *
 */
const TODO_KEY = 'todo_arr';

export default {
  saveTodo(todo) {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(todo));
  },
  readTodo() {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || "[]");
  }

}
