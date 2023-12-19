function addTodo() {
    const todoText = document.getElementById('todoInput').value;
    if (todoText.trim() !== '') {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.innerHTML = `${todoText} <button onclick="deleteItem(this)">Delete Item</button>`;
        todoList.appendChild(li);
        document.getElementById('todoInput').value = '';
    }
  }
  
  function deleteItem(item) {
    item.parentNode.remove();
  }
  
  function deleteAll() {
    document.getElementById('todoList').innerHTML = '';
  }