// noemirtil
const $btnGuardar = document.getElementById('btn-task'),
    $list = document.getElementById('list'),
    $inputTask = document.getElementById('task');

let tasks = [
    // {id: 1, title: 'First task'}
];

const getTask = () => {
    // getTask creates and displays every object of the array
    if (tasks.length) {
        // Checks if the array tasks is not empty
        $list.innerHTML = '';
        // Cleans the list
        tasks.forEach(el => {
            // el stands for element
            const $li = document.createElement('li');
            const $hr = document.createElement("hr");
            // creates a new list item and an <hr> for each element
            $li.innerHTML = `<p>${el.title}</p>
            <button id="delete-task" data-id="${el.id}" class="delete-task">X</button>`;
            // prints the title of the task in the list item line
            // adds a delete button to the line and assigns it the task id
            $li.classList.add("items");
            // adding the css class for styling
            $list.appendChild($li);
            $list.appendChild($hr);
            // appending the list item to the list
        })
        // If the array tasks is empty:
    } else $list.innerHTML = `<h4>No hay tareas pendientes</h4>`;
}

const saveTask = () => {
    // The function that makes btnGuardar save the inputTask into tasks array
    if ($inputTask.value !== "") {
        const task = {
            id: new Date().getTime(),
            // Generates a unique date id for every task
            title: $inputTask.value
            // Assigns the inputTask to the title
        }
        tasks.push(task);
        // Sends the task to the array
        $inputTask.value = "";
        // Cleans the input
        getTask();
        // And creates the new line!
    }
    else $list.innerHTML = `<h2>No se puede ingresar una tarea vacía</h2>
    <h4>Aún no hay tareas pendientes</h4>`;
}

const deleteTask = (id) => {
    // The function that will only show the tasks that weren't deleted
    // console.log(id);
    tasks = tasks.filter(el => parseInt(el.id) !== parseInt(id));
    // console.log(newTask);
    getTask();
}

document.addEventListener("DOMContentLoaded", (e) => getTask());
// Makes sure that the script will execute only after the DOM has been charged.
document.addEventListener("click", (e) => {
    // listens to all click events
    if (e.target === $btnGuardar) saveTask();
    // if the target of the click event is btnGuardar, call saveTask
    if (e.target.matches("#delete-task")) deleteTask(e.target.dataset.id);
    // if the target of the click event is delete-task, 
    // call deleteTask with the target's dataset.id passed as an argument
});
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveTask();
});
