// js/estadisticas.js
document.addEventListener('DOMContentLoaded', () => {
    if (!window.estadisticas) {
        console.error("No se cargaron los datos de estadísticas");
        return;
    }

    const est = window.estadisticas;

    // Goleadores
    renderTable('tabla-goleadores', est.goleadores, ['pos', 'jugador', 'seleccion', 'goles', 'partidos']);

    // Asistentes
    renderTable('tabla-asistentes', est.asistentes, ['pos', 'jugador', 'seleccion', 'asist', 'partidos']);

    // Porteros
    renderTable('tabla-porteros', est.porteros, ['pos', 'jugador', 'seleccion', 'valla', 'golesRec']);

    // Tarjetas
    renderTable('tabla-tarjetas', est.tarjetas, ['pos', 'jugador', 'seleccion', 'amarillas', 'rojas', 'partidos']);

    // Ranking
    renderTable('tabla-ranking', est.ranking, ['pos', 'seleccion', 'puntos']);
});

function renderTable(tableId, data, columns) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    if (!tbody) return;

    tbody.innerHTML = '';

    data.forEach(item => {
        let row = '<tr>';
        columns.forEach(col => {
            row += `<td>${item[col]}</td>`;
        });
        row += '</tr>';
        tbody.innerHTML += row;
    });
}