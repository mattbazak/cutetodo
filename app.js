// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



// Functions
function addTodo(e){
  //prevent from defult action(submit)
  e.preventDefault();
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo)
  //CHECK MARK
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // APPND to list
  todoList.appendChild(todoDiv);

  // clear todoInput value
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target ;
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  if(item.classList[0] === 'completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}