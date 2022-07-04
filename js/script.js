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


document.addEventListener(RENDER_EVENT, function () {
    console.log(todos);
  });


