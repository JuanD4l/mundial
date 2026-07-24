// js/noticias.js

function renderNews(filteredNews) {
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    filteredNews.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
            <div class="card h-100 shadow-sm" data-id="${noticia.id}">
                <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}" style="height: 220px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-primary mb-2 w-fit">${noticia.categoria}</span>
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text flex-grow-1">${noticia.resumen}</p>
                    <small class="text-muted"><i class="bi bi-calendar3"></i> ${noticia.fecha}</small>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <button class="btn btn-primary w-100 btn-leer-mas">Leer más</button>
                </div>
            </div>
        `;
        container.appendChild(card);

        // Evento para abrir modal
        card.querySelector('.btn-leer-mas').addEventListener('click', () => {
            showNewsDetail(noticia);
        });
    });
}

function showNewsDetail(noticia) {
    const modal = new bootstrap.Modal(document.getElementById('newsModal'));
    
    document.getElementById('modal-title').textContent = noticia.titulo;
    document.getElementById('modal-image').src = noticia.imagen;
    document.getElementById('modal-date').innerHTML = `
        <i class="bi bi-calendar3"></i> ${noticia.fecha} • ${noticia.categoria}
    `;
    document.getElementById('modal-content').innerHTML = `
        <p class="lead">${noticia.resumen}</p>
        <p>Este acontecimiento marca un momento clave en la fase de grupos del Mundial 2026. La afición ha respondido con gran entusiasmo y se espera que este resultado influya en el desarrollo del torneo.</p>
        <hr>
        <small class="text-muted">Fuente: FIFA • Actualizado el ${noticia.fecha}</small>
    `;

    modal.show();
}

// Buscador en tiempo real
function setupSearch() {
    const searchInput = document.getElementById('search-news');
    
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase().trim();
        
        const filtered = window.noticias.filter(noticia => 
            noticia.titulo.toLowerCase().includes(term) ||
            noticia.resumen.toLowerCase().includes(term) ||
            noticia.categoria.toLowerCase().includes(term)
        );
        
        renderNews(filtered.length > 0 ? filtered : window.noticias);
    });
}

// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    renderNews(window.noticias);
    setupSearch();
});