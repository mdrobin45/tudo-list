document.getElementById('addBtn').addEventListener('click',saveToLocalStorage);


// Save task to local storage
function saveToLocalStorage()
{
    const inputValue = document.getElementById('todoInput').value;
    const id = Math.floor(Math.random() * 1000);
    const task = {id,inputValue};
    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('todoInput').value = '';
    displayTask();
}
displayTask()


// Display task
function displayTask()
{
    const displayTasks = document.getElementById('displayTasks');
    displayTasks.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(element => {
        displayTasks.innerHTML += `<div class="grid grid-cols-2 py-3 rounded-md text-lg text-left px-3 my-2 w-6/12 m-auto bg-purple-200"><li>${element.inputValue}</li><div><img onclick="deleteTask(${element.id})" class="w-5 cursor-pointer float-right" src="icon/close.png"/></div></div>`;
    });
}


// Close Task
function deleteTask(id)
{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const remainTask = Object.values(tasks).filter(item => item.id != id);
    localStorage.setItem('tasks', JSON.stringify(remainTask));
    displayTask();
}