document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }
});
