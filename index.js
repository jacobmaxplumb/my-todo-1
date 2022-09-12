const todoItems = [];

function add() {
    const text = document.getElementById('todo-item').value;
    todoItems.push(text);
    generateList();
    document.getElementById('todo-item').value = '';
}

function generateList() {
    const todoList = document.getElementById('todo-list');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    for (let item of todoItems) {
        const todoElement = document.createElement('div');
        todoElement.innerText = item;
        todoList.appendChild(todoElement);
    }
    
}