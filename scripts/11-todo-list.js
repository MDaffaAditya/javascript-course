const todoList =  [{
    name:'make dinner',
    dueDate: '2025-10-03'
}, {
    name: 'wash dishes',
    dueDate: '2025-10-04'
}
];
renderTodoList();
function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate; <-- Destructuring
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1); 
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `; // splice mengambil 2 angka, 1. index yang ingin kita remove, 2. jumlah index yang ingin dihapus 
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;
    
    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}