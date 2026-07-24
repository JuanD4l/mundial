// js/calendario.js

let selectedTeam = null;

document.addEventListener('DOMContentLoaded', () => {
    renderTeamSelector();
    setupFilters();
});

// Renderizar selector de selecciones
function renderTeamSelector(filteredTeams = window.equipos) {
    const container = document.getElementById('team-selector');
    container.innerHTML = '';

    filteredTeams.forEach(team => {
        const div = document.createElement('div');
        div.className = 'col-6 col-sm-4 col-md-3 col-lg-2';
        div.innerHTML = `
            <div class="team-card card h-100 text-center p-3" data-codigo="${team.codigo}">
                <div class="display-1 mb-3">${team.bandera}</div>
                <h6 class="mb-1">${team.nombre}</h6>
                <small class="text-muted">Grupo ${team.grupo}</small>
            </div>
        `;
        container.appendChild(div);

        div.querySelector('.team-card').addEventListener('click', () => {
            selectTeam(team);
        });
    });
}

// Seleccionar un equipo
function selectTeam(team) {
    selectedTeam = team;

    // Resaltar la tarjeta seleccionada
    document.querySelectorAll('.team-card').forEach(card => {
        card.classList.toggle('active', card.dataset.codigo === team.codigo);
    });

    // Mostrar panel de próximo partido
    const panel = document.getElementById('next-match-panel');
    panel.style.display = 'block';

    const next = team.partidos[0] || { rival: "Por definir", fecha: "Por definir", hora: "Por definir", estadio: "Por definir", ciudad: "Por definir" };

    document.getElementById('panel-title').innerHTML = `
        ${team.bandera} ${team.nombre} - Próximo Partido
    `;

    document.getElementById('next-match-content').innerHTML = `
        <div class="row text-center align-items-center mb-4">
            <div class="col-5">
                <h3>${team.bandera}</h3>
                <h5>${team.nombre}</h5>
            </div>
            <div class="col-2 display-4 fw-bold text-primary">VS</div>
            <div class="col-5">
                <h3>${next.rival}</h3>
            </div>
        </div>
        <div class="row text-center g-4">
            <div class="col-6 col-md-3"><i class="bi bi-calendar-event fs-4"></i><br><strong>${next.fecha}</strong></div>
            <div class="col-6 col-md-3"><i class="bi bi-clock fs-4"></i><br><strong>${next.hora}</strong></div>
            <div class="col-6 col-md-3"><i class="bi bi-geo-alt fs-4"></i><br><strong>${next.estadio}</strong></div>
            <div class="col-6 col-md-3"><i class="bi bi-building fs-4"></i><br><strong>${next.ciudad}</strong></div>
        </div>
    `;

    renderMatches(team);
}

// Renderizar lista de partidos
function renderMatches(team) {
    const container = document.getElementById('matches-container');
    container.innerHTML = '';

    if (team.partidos.length === 0) {
        container.innerHTML = `<div class="col-12"><div class="alert alert-info">No hay partidos registrados para esta selección aún.</div></div>`;
        return;
    }

    team.partidos.forEach(match => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-header bg-primary text-white">
                    ${team.bandera} ${team.nombre} vs ${match.rival}
                </div>
                <div class="card-body">
                    <p><strong>Fecha:</strong> ${match.fecha}</p>
                    <p><strong>Hora:</strong> ${match.hora}</p>
                    <p><strong>Estadio:</strong> ${match.estadio}</p>
                    <p><strong>Ciudad:</strong> ${match.ciudad}</p>
                    <span class="badge bg-warning">${match.estado}</span>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Filtros
function setupFilters() {
    const searchInput = document.getElementById('search-team');
    const groupFilter = document.getElementById('group-filter');

    function filterTeams() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedGroup = groupFilter.value;

        const filtered = window.equipos.filter(team => {
            const matchSearch = !searchTerm || team.nombre.toLowerCase().includes(searchTerm);
            const matchGroup = !selectedGroup || team.grupo === selectedGroup;
            return matchSearch && matchGroup;
        });

        renderTeamSelector(filtered);
    }

    searchInput.addEventListener('input', filterTeams);
    groupFilter.addEventListener('change', filterTeams);
}