const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

// 1. In-memory array acts as our storage
let todos = [];

// Optional: Pre-populate array if needed
// todos = [{ id: 1, text: 'Learn DOM', completed: false }];
// renderTodos();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = input.value.trim();

    if (todoText) {
        // 2. Push new todo object directly into the array
        const newTodo = {
            id: Date.now(), // Unique ID to easily find/update/delete items
            text: todoText,
            completed: false
        };

        todos.push(newTodo);
        input.value = '';

        // 3. Re-render the UI from the array
        renderTodos();
    }
}

function toggleTodo(id) {
    // Update the matching object inside the array
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    // Filter out the deleted item from the array
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// 4. Single render function that syncs the DOM with the array
function renderTodos() {
    todosUL.innerHTML = ''; // Clear current list

    todos.forEach(todo => {
        const todoEl = document.createElement('li');

        if (todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todo.text;

        // Left-click to toggle completed state in array
        todoEl.addEventListener('click', () => {
            toggleTodo(todo.id);
        });

        // Right-click to remove from array
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            deleteTodo(todo.id);
        });

        todosUL.appendChild(todoEl);
    });

    console.log('Current Array State:', todos);
}