const createButton = document.querySelector('#create');
const todoList = document.querySelector('#list');

// Function to create new todo item
function createTodo() {
  const newItem = document.createElement('div');
  newItem.classList.add('item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newItem.appendChild(checkbox);

  const input = document.createElement('input');
  input.type = 'text';
  input.value = 'Todo content goes here';
  input.disabled = true;
  newItem.appendChild(input);

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const editButton = document.createElement('button');
  editButton.classList.add('material-icons');
  editButton.textContent = 'edit';
  actions.appendChild(editButton);

  const removeButton = document.createElement('button');
  removeButton.classList.add('material-icons', 'remove-btn');
  removeButton.textContent = 'remove_circle';
  actions.appendChild(removeButton);

  newItem.appendChild(actions);

  todoList.appendChild(newItem);

  // Add event listeners for editing and removing
  editButton.addEventListener('click', () => {
    input.disabled = !input.disabled;
    input.focus();
  });

  removeButton.addEventListener('click', () => {
    newItem.remove();
  });
}

// Add event listener for create button
createButton.addEventListener('click', () => {
  createTodo();
});
