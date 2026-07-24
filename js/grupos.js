// js/grupos.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grupos-container');
    
    window.gruposData.forEach(grupo => {
        let rows = '';
        
        grupo.equipos.forEach(eq => {
            rows += `
                <tr>
                    <td><strong>${eq.pos}</strong></td>
                    <td>${eq.nombre}</td>
                    <td>${eq.pj}</td>
                    <td>${eq.g}</td>
                    <td>${eq.e}</td>
                    <td>${eq.p}</td>
                    <td>${eq.gf}</td>
                    <td>${eq.gc}</td>
                    <td class="fw-bold ${eq.dg.startsWith('+') ? 'text-success' : eq.dg.startsWith('-') ? 'text-danger' : ''}">${eq.dg}</td>
                    <td><strong class="text-primary fs-5">${eq.pts}</strong></td>
                </tr>
            `;
        });

        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card shadow h-100">
                    <div class="card-header bg-success text-white text-center fs-5 py-3">
                        <strong>GRUPO ${grupo.grupo}</strong>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Equipo</th>
                                    <th>PJ</th>
                                    <th>G</th>
                                    <th>E</th>
                                    <th>P</th>
                                    <th>GF</th>
                                    <th>GC</th>
                                    <th>DG</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>${rows}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
});