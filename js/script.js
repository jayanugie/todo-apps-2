// mematikan reload ketika submit
document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });
});


// variabel untuk menampung data
const todos = [];
// mendefinisikan custom event
const RENDER_EVENT = 'render-todo';


// menghasilkan id unik
const generateId = () => {
    return +new Date();
}


// membuat objek baru
const generateTodoObject = (id, task, timestamp, isCompleted) => {
    return {
        id,
        task,
        timestamp,
        isCompleted
    }
}


const addTodo = () => {
    const textTodo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;

    const generateID = generateId();
    const todoObject = generateTodoObject(generateID, textTodo, timestamp, false);

    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}


document.addEventListener(RENDER_EVENT, () => {
    console.log(todos);

    const uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML = "";

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);
        uncompletedTODOList.append(todoElement);
    }
  });



const makeTodo = (todoObject) => {
    const textTitle = document.createElement('h2');
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `todo-${todoObject.id}`);

    return container;
}