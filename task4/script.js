document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDateInput = document.getElementById('task-date');
    const taskText = taskInput.value.trim();
    const taskDateTime = taskDateInput.value;

    if (taskText === '' || taskDateTime === '') {
        alert('Please enter both task and date/time');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    const taskDateSpan = document.createElement('span');
    taskDateSpan.className = 'task-date-time';
    taskDateSpan.textContent = new Date(taskDateTime).toLocaleString();

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        editTask(taskItem, taskSpan, taskDateSpan);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskDateSpan);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskDateInput.value = '';
}

function editTask(taskItem, taskSpan, taskDateSpan) {
    const taskInput = document.getElementById('task-input');
    const taskDateInput = document.getElementById('task-date');

    taskInput.value = taskSpan.textContent;
    taskDateInput.value = new Date(taskDateSpan.textContent).toISOString().slice(0, 16);

    const saveChanges = () => {
        taskSpan.textContent = taskInput.value.trim();
        taskDateSpan.textContent = new Date(taskDateInput.value).toLocaleString();
        document.getElementById('add-task-btn').textContent = 'Add';
        document.getElementById('add-task-btn').removeEventListener('click', saveChanges);
        document.getElementById('add-task-btn').addEventListener('click', addTask);
        taskInput.value = '';
        taskDateInput.value = '';
    };

    document.getElementById('add-task-btn').textContent = 'Save';
    document.getElementById('add-task-btn').removeEventListener('click', addTask);
    document.getElementById('add-task-btn').addEventListener('click', saveChanges);
}
