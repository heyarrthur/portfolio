const agendaForm = document.getElementById('agendaForm');
const agendaList = document.getElementById('agendaList');

document.addEventListener('DOMContentLoaded', loadAgenda);

agendaForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;

    const compromisso = {
        title,
        date,
        time,
        description,
        status: 'Pendente'
    };

    addCompromissoToLocalStorage(compromisso);

    addCompromissoToTable(compromisso);

    agendaForm.reset();
});

// LocalStorage
function addCompromissoToLocalStorage(compromisso) {
    let compromissos = getCompromissosFromLocalStorage();
    compromissos.push(compromisso);
    localStorage.setItem('agenda', JSON.stringify(compromissos));
}

function loadAgenda() {
    const compromissos = getCompromissosFromLocalStorage();
    compromissos.forEach(compromisso => addCompromissoToTable(compromisso));
}

function getCompromissosFromLocalStorage() {
    let compromissos = localStorage.getItem('agenda');
    if (compromissos === null) {
        compromissos = [];
    } else {
        compromissos = JSON.parse(compromissos);
    }
    return compromissos;
}

// Adicionar compromisso
function addCompromissoToTable(compromisso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${compromisso.title}</td>
        <td>${compromisso.date}</td>
        <td>${compromisso.time}</td>
        <td>${compromisso.description}</td>
        <td class="action-status">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ...
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item status-action" data-status="Adiamento">Adiamento</a></li>
                    <li><a class="dropdown-item status-action" data-status="Concluído">Concluído</a></li>
                    <li><a class="dropdown-item status-action" data-status="Ausente">Ausente</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item delete" href="#">Excluir</a></li>
                </ul>
            </div>
        </td>
    `;
    agendaList.appendChild(row);

    // Deletar Status
    row.querySelectorAll('.status-action').forEach(item => {
        item.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            updateStatus(row, status);
        });
    });

    row.querySelector('.delete').addEventListener('click', function() {
        row.remove();
        deleteCompromissoFromLocalStorage(compromisso);
    });
}

// Status Compromisso
function updateStatus(row, status) {
    const actionCell = row.querySelector('.action-status');

    let statusColor = '';
    if (status === 'Adiamento') {
        statusColor = 'text-warning';
    } else if (status === 'Concluído') {
        statusColor = 'text-success';
    } else if (status === 'Ausente') {
        statusColor = 'text-danger';
    }

    actionCell.innerHTML = `
        <span class="${statusColor}">${status}</span> 
        <button class="btn btn-sm btn-link toggle-options">Editar</button>
    `;

    const toggleButton = actionCell.querySelector('.toggle-options');
    toggleButton.addEventListener('click', function() {
        actionCell.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ...
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item status-action" data-status="Adiamento">Adiamento</a></li>
                    <li><a class="dropdown-item status-action" data-status="Concluído">Concluído</a></li>
                    <li><a class="dropdown-item status-action" data-status="Ausente">Ausente</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item delete" href="#">Excluir</a></li>
                </ul>
            </div>
        `;

        actionCell.querySelectorAll('.status-action').forEach(item => {
            item.addEventListener('click', function() {
                const newStatus = this.getAttribute('data-status');
                updateStatus(row, newStatus);
            });
        });

        actionCell.querySelector('.delete').addEventListener('click', function() {
            row.remove();
            deleteCompromissoFromLocalStorage(compromisso);
        });
    });
}

// Excluir do LocalStorage
function deleteCompromissoFromLocalStorage(compromisso) {
    let compromissos = getCompromissosFromLocalStorage();
    compromissos = compromissos.filter(item => item.title !== compromisso.title || item.date !== compromisso.date);
    localStorage.setItem('agenda', JSON.stringify(compromissos));
}
