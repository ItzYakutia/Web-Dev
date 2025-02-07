let newTaskInput = document.getElementById('newTask');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    let newTaskText = newTaskInput.value.trim();

    if (newTaskText !== '') {
        let listItem = document.createElement('li');
        var emoji = String.fromCodePoint(0x0001F5D1) // utf-32
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${newTaskText}</span>
            <button class="delete-button">${emoji}</button>
        `;

        let checkbox = listItem.querySelector('input[type="checkbox"]');
        let taskText = listItem.querySelector('span');
        let deleteButton = listItem.querySelector('.delete-button');

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskText.style.textDecoration = "line-through";
                taskText.style.color = "gray";
            } else {
                taskText.style.textDecoration = "none";
                taskText.style.color = "black";
            }
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        newTaskInput.value = '';
    }
}); 