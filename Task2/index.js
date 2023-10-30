const inputText = document.getElementById('input_task');
const button = document.getElementById('push');
const taskList = document.getElementById('taskList');

function createTask() {
    const taskText = inputText.value;
    const newList = document.createElement('li');
    newList.textContent = taskText;
    taskList.append(newList);
    inputText.value = '';
    newList.addEventListener('click', checkTask);
}

function checkTask() {
    const list = document.querySelector('ul');
    list.addEventListener('click', function (evt) {
        if (evt.target.tagName === 'LI') {
            evt.target.classList.toggle('done');
        }
    })
}

button.addEventListener('click', createTask);

