document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <input type="checkbox">
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(li);

        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', checkbox.checked);
        });

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});