// js/main.js

// Cuenta regresiva
function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    const targetDate = new Date("2026-06-11T00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownEl.innerHTML = "¡El Mundial ha comenzado!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdownEl.innerHTML = `${days} días para el inicio`;
    }, 1000);
}

// Próximos partidos destacados
function renderProximosPartidos() {
    const container = document.getElementById('proximos-partidos');
    if (!container || !window.equipos) return;

    const partidosDestacados = [
        { local: "🇲🇽 México", visitante: "🇧🇷 Brasil", fecha: "24 Jun 2026", hora: "16:00", estadio: "MetLife Stadium" },
        { local: "🇦🇷 Argentina", visitante: "🇸🇦 Arabia Saudita", fecha: "23 Jun 2026", hora: "18:00", estadio: "Hard Rock Stadium" },
        { local: "🇨🇴 Colombia", visitante: "🇵🇹 Portugal", fecha: "25 Jun 2026", hora: "17:00", estadio: "MetLife Stadium" }
    ];

    let html = '';
    partidosDestacados.forEach(partido => {
        html += `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title">${partido.local} vs ${partido.visitante}</h5>
                        <p class="text-muted mb-1">${partido.fecha} - ${partido.hora}</p>
                        <small class="text-muted">${partido.estadio}</small>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    renderProximosPartidos();
});