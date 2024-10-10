document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

// ADD Tarefas
document.getElementById("add-task").addEventListener("click", function () {
    const taskInput = document.getElementById("new-task").value;
    if (taskInput.trim() !== "") {
        addTaskToDOM(taskInput);
        saveTask(taskInput);
        document.getElementById("new-task").value = "";
    }
});

// DOM
function addTaskToDOM(task, isCompleted = false) {
    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    li.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" ${isCompleted ? 'checked' : ''}>
            <label class="form-check-label">
                ${task}
            </label>
        </div>
        <button class="btn btn-danger btn-sm delete-btn">Excluir</button>
    `;

    taskList.appendChild(li);

    //Deletar Tarefas
    li.querySelector(".delete-btn").addEventListener("click", function () {
        taskList.removeChild(li);
        removeTask(task);
    });

    //Checkbox
    li.querySelector(".form-check-input").addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
            showCongrats();
        } else {
            li.classList.remove("completed");
        }
    });
}

// LocalStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ task: task, isCompleted: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t.task !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(({ task, isCompleted }) => {
        addTaskToDOM(task, isCompleted);
    });
}

// Confetes
function showCongrats() {
    const congratsMessage = document.getElementById("parabensmsg");
    congratsMessage.style.display = "block";
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }

    setTimeout(() => {
        congratsMessage.style.display = "none";
        const confettiElements = document.querySelectorAll(".confetes");
        confettiElements.forEach(confetti => confetti.remove());
    }, 5000);
}

function createConfetti() {
    const confettiContainer = document.getElementById("confetes");
    const confetti = document.createElement("div");
    confetti.classList.add("confetes");

    const colors = ["#f39c12", "#e74c3c", "#8e44ad", "#3498db", "#2ecc71", "#f1c40f", "#e67e22", "#16a085"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;

    const size = Math.random() * (15 - 5) + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    const duration = Math.random() * (5 - 2) + 2;
    confetti.style.animationDuration = `${duration}s`;

    const rotation = Math.random() * 360;
    confetti.style.transform = `rotate(${rotation}deg)`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, duration * 10000);
}
