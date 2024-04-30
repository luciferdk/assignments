/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.todos = [];
  }

  // Adds a todo to the list of todos
  add(todo) {
    this.todos.push(todo);
  }

  // Removes a todo at the given index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  // Updates a todo at the given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns the todo at the given index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null; // Return null if index is out of bounds
  }

  // Deletes all todos
  clear() {
    this.todos = [];
  }
}

// Example usage:
// const myTodoList = new Todo();
// myTodoList.add("Buy groceries");
// myTodoList.add("Read a book");
// myTodoList.add("Exercise");
// console.log(myTodoList.getAll()); // ["Buy groceries", "Read a book", "Exercise"]
// myTodoList.update(1, "Finish coding project");
// console.log(myTodoList.get(1)); // "Finish coding project"
// myTodoList.remove(0);
// console.log(myTodoList.getAll()); // ["Finish coding project", "Exercise"]
// myTodoList.clear();
// console.log(myTodoList.getAll()); // []



module.exports = Todo;
