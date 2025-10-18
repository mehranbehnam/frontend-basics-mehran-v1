// Arrays and localStorage: ذخیره in browser
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];  // get from storage

// Function: add task
function addTodo(task) {
  todoList.push(task);  // push
  localStorage.setItem('todoList', JSON.stringify(todoList));  // save
  console.log('Added and saved:', task);
  displayList();  // نمایش بروز
}

// Function: نمایش لیست
function displayList() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';  // پاک
  todoList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);  // اضافه
  });
}

// Events: onclick button
document.getElementById('addBtn').addEventListener('click', function() {
  const task = prompt('Task بنویس:');  // prompt for input
  if (task) addTodo(task);  // if not empty
});

// Initial display
displayList();  // بارگذاری
console.log('Full list from storage:', todoList);