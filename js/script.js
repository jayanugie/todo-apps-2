document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });
});

const generateID = () => {
    return +new Date();
}

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

    const generateID = generateID();
    const todoObject = generateTodoObject(generateID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}


