// Arrays: لیست To-Do
let todoList = [];

// Function: اضافه task
function addTodo(task) {
  todoList.push(task);  // push: اضافه
  console.log('Added:', task);
}

// مثال
addTodo('یادگیری JS');
addTodo('ساخت To-Do');

// Loops: چاپ
todoList.forEach(item => console.log('Todo:', item));

console.log('Full list:', todoList);