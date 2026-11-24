import './style.css'

// One array stores all todo items and acts as the app's data source.
let todos = loadTodos()
let currentFilter = 'all'

const form = document.querySelector('#todo-form')
const input = document.querySelector('#todo-input')
const list = document.querySelector('#todo-list')
const count = document.querySelector('#todo-count')
const clearCompletedButton = document.querySelector('#clear-completed')
const filterButtons = document.querySelectorAll('.filter-button')

function saveTodos() {
  // localStorage keeps the tasks after the browser is refreshed.
  localStorage.setItem('tailwind-todo-tasks', JSON.stringify(todos))
}

function loadTodos() {
  const savedTodos = localStorage.getItem('tailwind-todo-tasks')

  try {
    return savedTodos ? JSON.parse(savedTodos) : []
  } catch {
    return []
  }
}

// The form submit event adds a new todo.
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const text = input.value.trim()
  if (!text) return

  todos.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  })

  input.value = ''
  input.focus()
  saveTodos()
  renderTodos()
})

function createTodoItem(todo) {
  const item = document.createElement('li')
  item.className = 'flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 transition hover:border-slate-300'
  item.dataset.id = todo.id

  // The checkbox updates whether this task is completed.
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = todo.completed
  checkbox.className = 'h-5 w-5 shrink-0 cursor-pointer accent-indigo-600'
  checkbox.setAttribute('aria-label', `Mark ${todo.text} as ${todo.completed ? 'active' : 'completed'}`)
  checkbox.addEventListener('change', () => toggleTodo(todo.id))

  // textContent adds text safely without treating it as HTML.
  const text = document.createElement('span')
  text.textContent = todo.text
  text.className = 'min-w-0 flex-1 break-words'

  if (todo.completed) {
    text.classList.add('text-slate-400', 'line-through')
  }

  // Each delete button removes its own task using the todo id.
  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.textContent = 'Delete'
  deleteButton.className = 'rounded-md px-2 py-1 text-sm font-semibold text-slate-400 transition hover:bg-red-50 hover:text-red-600'
  deleteButton.setAttribute('aria-label', `Delete ${todo.text}`)
  deleteButton.addEventListener('click', () => deleteTodo(todo.id))

  item.append(checkbox, text, deleteButton)
  return item
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )
  saveTodos()
  renderTodos()
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id)
  saveTodos()
  renderTodos()
}

function getVisibleTodos() {
  if (currentFilter === 'active') {
    return todos.filter((todo) => !todo.completed)
  }

  if (currentFilter === 'completed') {
    return todos.filter((todo) => todo.completed)
  }

  return todos
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === currentFilter
    button.classList.toggle('bg-white', isActive)
    button.classList.toggle('shadow-sm', isActive)
    button.classList.toggle('text-slate-500', !isActive)
  })
}

function renderTodos() {
  const visibleTodos = getVisibleTodos()
  list.replaceChildren(...visibleTodos.map(createTodoItem))

  const activeCount = todos.filter((todo) => !todo.completed).length
  count.textContent = `${activeCount} ${activeCount === 1 ? 'task' : 'tasks'} left`

  clearCompletedButton.classList.toggle('hidden', !todos.some((todo) => todo.completed))
  updateFilterButtons()
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter
    renderTodos()
  })
})

clearCompletedButton.addEventListener('click', () => {
  todos = todos.filter((todo) => !todo.completed)
  saveTodos()
  renderTodos()
})

renderTodos()
