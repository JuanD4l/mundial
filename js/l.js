// js/main.js
function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    const targetDate = new Date("2026-06-11T00:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownEl.innerHTML = "¡El Mundial ha comenzado!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdownEl.innerHTML = `${days} días`;
    }, 1000);
}

// Próximos partidos (ejemplo)
function renderProximosPartidos() {
    const container = document.getElementById('proximos-partidos');
    if (!container || !window.equipos) return;

    // Tomamos algunos partidos
    const partidos = [
        { local: "🇲🇽 México", visitante: "🇧🇷 Brasil", fecha: "24 Jun 2026", hora: "16:00" },
        { local: "🇦🇷 Argentina", visitante: "🇸🇦 Arabia Saudita", fecha: "23 Jun 2026", hora: "18:00" },
        { local: "🇨🇴 Colombia", visitante: "🇵🇹 Portugal", fecha: "25 Jun 2026", hora: "17:00" }
    ];

    container.innerHTML = partidos.map(p => `
        <div class="col-md-4">
            <div class="card h-100 text-center">
                <div class="card-body">
                    <h5>${p.local} vs ${p.visitante}</h5>
                    <p class="text-muted">${p.fecha} - ${p.hora}</p>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    renderProximosPartidos();
});