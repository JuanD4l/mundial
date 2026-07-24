// js/datos.js - Datos del Mundial FIFA 2026

// ==================== GRUPOS ====================
const gruposData = [
  { grupo: "A", equipos: [
    { pos: 1, nombre: "México", pj: 2, g: 2, e: 0, p: 0, gf: 5, gc: 1, dg: "+4", pts: 6 },
    { pos: 2, nombre: "Corea del Sur", pj: 2, g: 1, e: 1, p: 0, gf: 3, gc: 2, dg: "+1", pts: 4 },
    { pos: 3, nombre: "Rep. Checa", pj: 2, g: 0, e: 1, p: 1, gf: 1, gc: 3, dg: "-2", pts: 1 },
    { pos: 4, nombre: "Sudáfrica", pj: 2, g: 0, e: 0, p: 2, gf: 0, gc: 3, dg: "-3", pts: 0 }
  ]},
  { grupo: "B", equipos: [
    { pos: 1, nombre: "Suiza", pj: 3, g: 2, e: 1, p: 0, gf: 7, gc: 3, dg: "+4", pts: 7 },
    { pos: 2, nombre: "Canadá", pj: 3, g: 1, e: 1, p: 1, gf: 8, gc: 3, dg: "+5", pts: 4 },
    { pos: 3, nombre: "Bosnia y Herzegovina", pj: 3, g: 1, e: 1, p: 1, gf: 5, gc: 6, dg: "-1", pts: 4 },
    { pos: 4, nombre: "Qatar", pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 10, dg: "-8", pts: 1 }
  ]},
  { grupo: "C", equipos: [
    { pos: 1, nombre: "Brasil", pj: 3, g: 2, e: 1, p: 0, gf: 7, gc: 1, dg: "+6", pts: 7 },
    { pos: 2, nombre: "Marruecos", pj: 3, g: 2, e: 1, p: 0, gf: 6, gc: 3, dg: "+3", pts: 7 },
    { pos: 3, nombre: "Escocia", pj: 3, g: 1, e: 0, p: 2, gf: 1, gc: 5, dg: "-4", pts: 3 },
    { pos: 4, nombre: "Haití", pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 7, dg: "-5", pts: 0 }
  ]},
  { grupo: "D", equipos: [
    { pos: 1, nombre: "Estados Unidos", pj: 3, g: 2, e: 0, p: 1, gf: 8, gc: 7, dg: "+1", pts: 6 },
    { pos: 2, nombre: "Australia", pj: 3, g: 1, e: 2, p: 0, gf: 2, gc: 1, dg: "+1", pts: 5 },
    { pos: 3, nombre: "Paraguay", pj: 3, g: 1, e: 1, p: 1, gf: 2, gc: 4, dg: "-2", pts: 4 },
    { pos: 4, nombre: "Turquía", pj: 3, g: 1, e: 0, p: 2, gf: 6, gc: 6, dg: "0", pts: 3 }
  ]},
  { grupo: "E", equipos: [
    { pos: 1, nombre: "Alemania", pj: 3, g: 2, e: 0, p: 1, gf: 11, gc: 6, dg: "+5", pts: 6 },
    { pos: 2, nombre: "Costa de Marfil", pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 2, dg: "+4", pts: 6 },
    { pos: 3, nombre: "Ecuador", pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 4, dg: "0", pts: 4 },
    { pos: 4, nombre: "Curazao", pj: 3, g: 0, e: 1, p: 2, gf: 1, gc: 10, dg: "-9", pts: 1 }
  ]},
  { grupo: "F", equipos: [
    { pos: 1, nombre: "Países Bajos", pj: 3, g: 2, e: 1, p: 0, gf: 10, gc: 4, dg: "+6", pts: 7 },
    { pos: 2, nombre: "Japón", pj: 3, g: 1, e: 2, p: 0, gf: 7, gc: 4, dg: "+3", pts: 5 },
    { pos: 3, nombre: "Suecia", pj: 3, g: 1, e: 1, p: 1, gf: 7, gc: 7, dg: "0", pts: 4 },
    { pos: 4, nombre: "Túnez", pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 12, dg: "-10", pts: 0 }
  ]},
  { grupo: "G", equipos: [
    { pos: 1, nombre: "Egipto", pj: 2, g: 1, e: 1, p: 0, gf: 3, gc: 2, dg: "+1", pts: 4 },
    { pos: 2, nombre: "Irán", pj: 2, g: 0, e: 2, p: 0, gf: 2, gc: 2, dg: "0", pts: 2 },
    { pos: 3, nombre: "Bélgica", pj: 2, g: 0, e: 2, p: 0, gf: 2, gc: 2, dg: "0", pts: 2 },
    { pos: 4, nombre: "Nueva Zelanda", pj: 2, g: 0, e: 1, p: 1, gf: 1, gc: 2, dg: "-1", pts: 1 }
  ]},
  { grupo: "H", equipos: [
    { pos: 1, nombre: "Uruguay", pj: 2, g: 1, e: 1, p: 0, gf: 3, gc: 2, dg: "+1", pts: 4 },
    { pos: 2, nombre: "España", pj: 2, g: 1, e: 0, p: 1, gf: 3, gc: 2, dg: "+1", pts: 3 },
    { pos: 3, nombre: "Cabo Verde", pj: 2, g: 1, e: 0, p: 1, gf: 2, gc: 2, dg: "0", pts: 3 },
    { pos: 4, nombre: "Arabia Saudita", pj: 2, g: 0, e: 1, p: 1, gf: 1, gc: 3, dg: "-2", pts: 1 }
  ]},
  { grupo: "I", equipos: [
    { pos: 1, nombre: "Noruega", pj: 2, g: 2, e: 0, p: 0, gf: 5, gc: 1, dg: "+4", pts: 6 },
    { pos: 2, nombre: "Francia", pj: 2, g: 2, e: 0, p: 0, gf: 4, gc: 1, dg: "+3", pts: 6 },
    { pos: 3, nombre: "Senegal", pj: 2, g: 0, e: 0, p: 2, gf: 1, gc: 3, dg: "-2", pts: 0 },
    { pos: 4, nombre: "Irak", pj: 2, g: 0, e: 0, p: 2, gf: 1, gc: 6, dg: "-5", pts: 0 }
  ]},
  { grupo: "J", equipos: [
    { pos: 1, nombre: "Argentina", pj: 2, g: 2, e: 0, p: 0, gf: 5, gc: 0, dg: "+5", pts: 6 },
    { pos: 2, nombre: "Austria", pj: 2, g: 1, e: 0, p: 1, gf: 3, gc: 3, dg: "0", pts: 3 },
    { pos: 3, nombre: "Argelia", pj: 2, g: 1, e: 0, p: 1, gf: 1, gc: 3, dg: "-2", pts: 3 },
    { pos: 4, nombre: "Jordania", pj: 2, g: 0, e: 0, p: 2, gf: 1, gc: 4, dg: "-3", pts: 0 }
  ]},
  { grupo: "K", equipos: [
    { pos: 1, nombre: "Colombia", pj: 2, g: 2, e: 0, p: 0, gf: 4, gc: 1, dg: "+3", pts: 6 },
    { pos: 2, nombre: "Portugal", pj: 2, g: 1, e: 1, p: 0, gf: 6, gc: 1, dg: "+5", pts: 4 },
    { pos: 3, nombre: "Rep. Congo", pj: 2, g: 0, e: 1, p: 1, gf: 2, gc: 3, dg: "-1", pts: 1 },
    { pos: 4, nombre: "Uzbekistán", pj: 2, g: 0, e: 0, p: 2, gf: 0, gc: 7, dg: "-7", pts: 0 }
  ]},
  { grupo: "L", equipos: [
    { pos: 1, nombre: "Inglaterra", pj: 2, g: 1, e: 1, p: 0, gf: 3, gc: 1, dg: "+2", pts: 4 },
    { pos: 2, nombre: "Croacia", pj: 2, g: 1, e: 1, p: 0, gf: 2, gc: 1, dg: "+1", pts: 4 },
    { pos: 3, nombre: "Ghana", pj: 2, g: 0, e: 1, p: 1, gf: 1, gc: 2, dg: "-1", pts: 1 },
    { pos: 4, nombre: "Panamá", pj: 2, g: 0, e: 1, p: 1, gf: 0, gc: 2, dg: "-2", pts: 1 }
  ]}
];

// ==================== EQUIPOS ====================
const equipos = [
  { codigo: "MEX", nombre: "México", bandera: "🇲🇽", grupo: "A", partidos: [] },
  { codigo: "BRA", nombre: "Brasil", bandera: "🇧🇷", grupo: "C", partidos: [] },
  { codigo: "ARG", nombre: "Argentina", bandera: "🇦🇷", grupo: "J", partidos: [] },
  { codigo: "COL", nombre: "Colombia", bandera: "🇨🇴", grupo: "K", partidos: [] },
  { codigo: "USA", nombre: "Estados Unidos", bandera: "🇺🇸", grupo: "D", partidos: [] },
  { codigo: "ESP", nombre: "España", bandera: "🇪🇸", grupo: "H", partidos: [] },
  { codigo: "FRA", nombre: "Francia", bandera: "🇫🇷", grupo: "I", partidos: [] },
  { codigo: "GER", nombre: "Alemania", bandera: "🇩🇪", grupo: "E", partidos: [] },
  { codigo: "ENG", nombre: "Inglaterra", bandera: "🇬🇧", grupo: "L", partidos: [] },
  { codigo: "POR", nombre: "Portugal", bandera: "🇵🇹", grupo: "K", partidos: [] },
  { codigo: "ITA", nombre: "Italia", bandera: "🇮🇹", grupo: "B", partidos: [] },
  { codigo: "NED", nombre: "Países Bajos", bandera: "🇳🇱", grupo: "F", partidos: [] },
  { codigo: "URU", nombre: "Uruguay", bandera: "🇺🇾", grupo: "H", partidos: [] },
  { codigo: "JPN", nombre: "Japón", bandera: "🇯🇵", grupo: "F", partidos: [] },
  { codigo: "KOR", nombre: "Corea del Sur", bandera: "🇰🇷", grupo: "A", partidos: [] },
  { codigo: "MAR", nombre: "Marruecos", bandera: "🇲🇦", grupo: "C", partidos: [] },
  { codigo: "CRO", nombre: "Croacia", bandera: "🇭🇷", grupo: "L", partidos: [] },
  { codigo: "SEN", nombre: "Senegal", bandera: "🇸🇳", grupo: "I", partidos: [] },
  { codigo: "AUS", nombre: "Australia", bandera: "🇦🇺", grupo: "D", partidos: [] },
  { codigo: "CAN", nombre: "Canadá", bandera: "🇨🇦", grupo: "B", partidos: [] },
  { codigo: "SAU", nombre: "Arabia Saudita", bandera: "🇸🇦", grupo: "J", partidos: [] },
  { codigo: "TUN", nombre: "Túnez", bandera: "🇹🇳", grupo: "F", partidos: [] },
  { codigo: "IRN", nombre: "Irán", bandera: "🇮🇷", grupo: "G", partidos: [] },
  { codigo: "BEL", nombre: "Bélgica", bandera: "🇧🇪", grupo: "G", partidos: [] },
  { codigo: "EGY", nombre: "Egipto", bandera: "🇪🇬", grupo: "G", partidos: [] },
  { codigo: "NGA", nombre: "Nigeria", bandera: "🇳🇬", grupo: "B", partidos: [] },
  { codigo: "GHA", nombre: "Ghana", bandera: "🇬🇭", grupo: "L", partidos: [] },
  { codigo: "ECU", nombre: "Ecuador", bandera: "🇪🇨", grupo: "E", partidos: [] },
  { codigo: "CHI", nombre: "Chile", bandera: "🇨🇱", grupo: "D", partidos: [] },
  { codigo: "PER", nombre: "Perú", bandera: "🇵🇪", grupo: "H", partidos: [] },
  { codigo: "PAR", nombre: "Paraguay", bandera: "🇵🇾", grupo: "D", partidos: [] },
  { codigo: "ALG", nombre: "Argelia", bandera: "🇩🇿", grupo: "J", partidos: [] }
];

// ==================== NOTICIAS ====================
const noticias = [
  {
    id: 1,
    titulo: "Colombia lidera su grupo con autoridad",
    resumen: "La selección cafetera vence a Portugal y se posiciona como favorita.",
    fecha: "2 Julio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Colombia",
    categoria: "Selecciones"
  },
  {
    id: 2,
    titulo: "Mbappé alcanza los 5 goles en el torneo",
    resumen: "El francés sigue brillando y lidera la tabla de goleadores.",
    fecha: "2 Julio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Mbappe",
    categoria: "Jugadores"
  },
  {
    id: 3,
    titulo: "Argentina sufre pero avanza",
    resumen: "Messi y compañía logran clasificar tras un complicado partido.",
    fecha: "1 Julio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Argentina",
    categoria: "Selecciones"
  },
  {
    id: 4,
    titulo: "Nuevo récord de asistencia en el MetLife Stadium",
    resumen: "Más de 82.000 espectadores disfrutaron del partido entre México y Brasil.",
    fecha: "30 Junio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Estadio",
    categoria: "Estadios"
  },
  {
    id: 5,
    titulo: "Inglaterra clasifica como líder de grupo",
    resumen: "Los ingleses dominan su grupo y se preparan para la fase eliminatoria.",
    fecha: "2 Julio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Inglaterra",
    categoria: "Selecciones"
  },
  {
    id: 6,
    titulo: "Sorpresivo empate de Marruecos sobre Brasil",
    resumen: "Los africanos dan la sorpresa del torneo al empatar al favorito Brasil.",
    fecha: "28 Junio 2026",
    imagen: "https://www.rfi.fr/es/deportes/20260614-mundial-2026-un-marruecos-brillante-da-la-sorpresa-con-un-empate-ante-brasil",
    categoria: "Partidos"
  },
  {
    id: 7,
    titulo: "Alemania muestra su poderío goleador",
    resumen: "Los germanos golean a Costa de Marfil y se perfilan como candidatos al título.",
    fecha: "24 Junio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Alemania",
    categoria: "Selecciones"
  },
  {
    id: 8,
    titulo: "Messi brilla en la victoria de Argentina",
    resumen: "El capitán argentino marca y asiste en la victoria contra Austria.",
    fecha: "27 Junio 2026",
    imagen: "https://via.placeholder.com/600x400?text=Messi",
    categoria: "Jugadores"
  }
];

// ==================== ESTADÍSTICAS ====================
const estadisticas = {
    goleadores: [
        { pos: 1, jugador: "Kylian Mbappé", seleccion: "Francia", goles: 5, partidos: 3 },
        { pos: 2, jugador: "Lionel Messi", seleccion: "Argentina", goles: 4, partidos: 3 },
        { pos: 3, jugador: "Vinicius Jr.", seleccion: "Brasil", goles: 4, partidos: 3 },
        { pos: 4, jugador: "Harry Kane", seleccion: "Inglaterra", goles: 3, partidos: 3 },
        { pos: 5, jugador: "Lautaro Martínez", seleccion: "Argentina", goles: 3, partidos: 3 }
    ],
    asistentes: [
        { pos: 1, jugador: "Julián Álvarez", seleccion: "Argentina", asist: 4, partidos: 3 },
        { pos: 2, jugador: "Bruno Fernandes", seleccion: "Portugal", asist: 3, partidos: 3 },
        { pos: 3, jugador: "Jamal Musiala", seleccion: "Alemania", asist: 3, partidos: 3 }
    ],
    porteros: [
        { pos: 1, jugador: "Emiliano Martínez", seleccion: "Argentina", valla: 2, golesRec: 1 },
        { pos: 2, jugador: "Thibaut Courtois", seleccion: "Bélgica", valla: 2, golesRec: 2 },
        { pos: 3, jugador: "Alisson Becker", seleccion: "Brasil", valla: 1, golesRec: 2 }
    ],
    tarjetas: [
        { pos: 1, jugador: "Casemiro", seleccion: "Brasil", amarillas: 4, rojas: 1, partidos: 3 },
        { pos: 2, jugador: "Rodri", seleccion: "España", amarillas: 3, rojas: 0, partidos: 3 },
        { pos: 3, jugador: "Sofyan Amrabat", seleccion: "Marruecos", amarillas: 3, rojas: 0, partidos: 3 },
        { pos: 4, jugador: "Jefferson Lerma", seleccion: "Colombia", amarillas: 3, rojas: 1, partidos: 3 }
    ],
    ranking: [
        { pos: 1, seleccion: "Argentina", puntos: 1850 },
        { pos: 2, seleccion: "Brasil", puntos: 1820 },
        { pos: 3, seleccion: "Francia", puntos: 1800 },
        { pos: 4, seleccion: "España", puntos: 1750 },
        { pos: 5, seleccion: "Inglaterra", puntos: 1720 }
    ]
};

// Exportar todo
window.gruposData = gruposData;
window.equipos = equipos;
window.noticias = noticias;
window.estadisticas = estadisticas;