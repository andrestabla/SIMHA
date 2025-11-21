const programs = [
  {
    name: 'Técnico Laboral en Guía Canino para la Detección de Explosivos',
    level: 'Técnico Laboral',
    credits: 48,
    type: 'Certificación de aptitud ocupacional',
    courses: [
      { name: 'Ciencias del olfato aplicado', credits: 3, tag: 'operativo' },
      { name: 'Seguridad en manejo de explosivos', credits: 4, tag: 'seguridad' },
      { name: 'Condicionamiento y obediencia avanzada', credits: 3, tag: 'competencias' }
    ]
  },
  {
    name: 'Técnico Laboral por Competencias en Abastecimiento Aeronáutico',
    level: 'Técnico Laboral',
    credits: 50,
    type: 'Certificación de aptitud ocupacional',
    courses: [
      { name: 'Logística aeroportuaria', credits: 3, tag: 'logística' },
      { name: 'Cadena de suministro aeronáutica', credits: 3, tag: 'gestión' },
      { name: 'Seguridad operacional básica', credits: 3, tag: 'seguridad' }
    ]
  },
  {
    name: 'Técnico Laboral por Competencias en Mantenimiento Aeronáutico',
    level: 'Técnico Laboral',
    credits: 52,
    type: 'Certificación de aptitud ocupacional',
    courses: [
      { name: 'Motores y sistemas de aeronaves', credits: 4, tag: 'mantenimiento' },
      { name: 'Normativa aeronáutica', credits: 3, tag: 'normativa' },
      { name: 'Procedimientos de inspección', credits: 3, tag: 'inspección' }
    ]
  },
  {
    name: 'Técnico Profesional en Seguridad Vial (presencial)',
    level: 'Técnico Profesional',
    credits: 60,
    type: 'Educación superior',
    courses: [
      { name: 'Legislación de tránsito', credits: 3, tag: 'normativa' },
      { name: 'Investigación de accidentes', credits: 4, tag: 'investigación' },
      { name: 'Gestión comunitaria vial', credits: 2, tag: 'comunidad' }
    ]
  },
  {
    name: 'Técnico Profesional en Seguridad Vial (a distancia)',
    level: 'Técnico Profesional',
    credits: 60,
    type: 'Educación superior',
    courses: [
      { name: 'Normatividad de tránsito', credits: 3, tag: 'normativa' },
      { name: 'Estadística aplicada a siniestralidad', credits: 3, tag: 'investigación' },
      { name: 'Primer respondiente', credits: 2, tag: 'operativo' }
    ]
  },
  {
    name: 'Técnico Profesional en Inteligencia y Contrainteligencia Policial',
    level: 'Técnico Profesional',
    credits: 64,
    type: 'Educación superior',
    courses: [
      { name: 'Fundamentos de inteligencia', credits: 3, tag: 'investigación' },
      { name: 'Análisis de señales', credits: 3, tag: 'tecnologia' },
      { name: 'Gestión de fuentes', credits: 3, tag: 'operativo' }
    ]
  },
  {
    name: 'Técnico Profesional en Investigación Criminal (Policía Judicial)',
    level: 'Técnico Profesional',
    credits: 64,
    type: 'Educación superior',
    courses: [
      { name: 'Cadena de custodia', credits: 3, tag: 'investigación' },
      { name: 'Balística forense', credits: 3, tag: 'investigación' },
      { name: 'Entrevista judicial', credits: 2, tag: 'derecho' }
    ]
  },
  {
    name: 'Tecnología en Gestión del Servicio de Policía',
    level: 'Tecnológico',
    credits: 96,
    type: 'Educación superior',
    courses: [
      { name: 'Gestión estratégica del servicio', credits: 3, tag: 'gestión' },
      { name: 'Derecho policial', credits: 3, tag: 'normativa' },
      { name: 'Ética y transparencia', credits: 2, tag: 'ética' }
    ]
  },
  {
    name: 'Tecnología en Mantenimiento Aeronáutico',
    level: 'Tecnológico',
    credits: 100,
    type: 'Educación superior',
    courses: [
      { name: 'Estructuras aeronáuticas', credits: 4, tag: 'mantenimiento' },
      { name: 'Materiales compuestos', credits: 3, tag: 'tecnologia' },
      { name: 'Calidad y seguridad aeronáutica', credits: 3, tag: 'seguridad' }
    ]
  },
  {
    name: 'Tecnología en Investigación de Accidentes de Tránsito',
    level: 'Tecnológico',
    credits: 96,
    type: 'Educación superior',
    courses: [
      { name: 'Reconstrucción de siniestros', credits: 4, tag: 'investigación' },
      { name: 'Toma de evidencias', credits: 3, tag: 'investigación' },
      { name: 'Responsabilidad civil y penal', credits: 3, tag: 'derecho' }
    ]
  },
  {
    name: 'Pregrado en Criminalística',
    level: 'Pregrado',
    credits: 160,
    type: 'Educación superior',
    courses: [
      { name: 'Procesamiento de escena', credits: 4, tag: 'investigación' },
      { name: 'Documentología forense', credits: 3, tag: 'investigación' },
      { name: 'Bioética y derechos humanos', credits: 2, tag: 'ética' }
    ]
  },
  {
    name: 'Administración Policial',
    level: 'Pregrado',
    credits: 160,
    type: 'Educación superior',
    courses: [
      { name: 'Planeación estratégica', credits: 3, tag: 'gestión' },
      { name: 'Finanzas públicas', credits: 3, tag: 'gestión' },
      { name: 'Gestión del talento humano', credits: 3, tag: 'gestión' }
    ]
  },
  {
    name: 'Licenciatura en Educación Comunitaria en Derechos Humanos',
    level: 'Pregrado',
    credits: 150,
    type: 'Educación superior',
    courses: [
      { name: 'Pedagogía comunitaria', credits: 3, tag: 'comunidad' },
      { name: 'Derechos humanos', credits: 3, tag: 'derecho' },
      { name: 'Diseño de proyectos sociales', credits: 3, tag: 'gestión' }
    ]
  },
  {
    name: 'Especialización en Poligrafía',
    level: 'Posgrado',
    type: 'Especialización técnica profesional',
    credits: 28,
    courses: [
      { name: 'Fundamentos de poligrafía', credits: 3, tag: 'investigación' },
      { name: 'Entrevista avanzada', credits: 2, tag: 'operativo' },
      { name: 'Marco legal de la poligrafía', credits: 2, tag: 'normativa' }
    ]
  },
  {
    name: 'Especialización en Enfermería Canina',
    level: 'Posgrado',
    type: 'Especialización técnica profesional',
    credits: 26,
    courses: [
      { name: 'Farmacología aplicada canina', credits: 3, tag: 'salud' },
      { name: 'Trauma y emergencias K9', credits: 2, tag: 'salud' },
      { name: 'Bioseguridad en unidades caninas', credits: 2, tag: 'seguridad' }
    ]
  },
  {
    name: 'Especialización en Investigación Criminal',
    level: 'Posgrado',
    type: 'Especialización profesional',
    credits: 26,
    courses: [
      { name: 'Metodología investigativa', credits: 3, tag: 'investigación' },
      { name: 'Cadena de custodia avanzada', credits: 2, tag: 'investigación' },
      { name: 'Análisis forense digital', credits: 3, tag: 'tecnologia' }
    ]
  },
  {
    name: 'Especialización en Seguridad Integral',
    level: 'Posgrado',
    type: 'Especialización profesional',
    credits: 24,
    courses: [
      { name: 'Gestión de riesgos integrales', credits: 3, tag: 'seguridad' },
      { name: 'Ciberseguridad aplicada', credits: 2, tag: 'tecnologia' },
      { name: 'Seguridad corporativa', credits: 2, tag: 'gestión' }
    ]
  },
  {
    name: 'Especialización en Servicio de Policía',
    level: 'Posgrado',
    type: 'Especialización profesional',
    credits: 24,
    courses: [
      { name: 'Planeación del servicio', credits: 3, tag: 'gestión' },
      { name: 'Derecho disciplinario', credits: 2, tag: 'normativa' },
      { name: 'Innovación en servicio', credits: 2, tag: 'gestión' }
    ]
  },
  {
    name: 'Maestría en Investigación Criminal',
    level: 'Posgrado',
    type: 'Maestría',
    credits: 48,
    courses: [
      { name: 'Metodologías de investigación avanzada', credits: 4, tag: 'investigación' },
      { name: 'Analítica de inteligencia', credits: 3, tag: 'tecnologia' },
      { name: 'Ética y derechos humanos', credits: 2, tag: 'ética' }
    ]
  },
  {
    name: 'Maestría en Seguridad Pública',
    level: 'Posgrado',
    type: 'Maestría',
    credits: 48,
    courses: [
      { name: 'Políticas públicas de seguridad', credits: 3, tag: 'gestión' },
      { name: 'Análisis de riesgo', credits: 3, tag: 'seguridad' },
      { name: 'Gestión de crisis', credits: 3, tag: 'gestión' }
    ]
  },
  {
    name: 'Maestría en Ciberseguridad e Informática Forense',
    level: 'Posgrado',
    type: 'Maestría',
    credits: 50,
    courses: [
      { name: 'Respuesta a incidentes', credits: 4, tag: 'tecnologia' },
      { name: 'Forense digital', credits: 3, tag: 'investigación' },
      { name: 'Gestión de vulnerabilidades', credits: 3, tag: 'seguridad' }
    ]
  }
];

const requests = [
  {
    id: 'SOL-014-2025',
    applicant: 'Myriam Valdés',
    type: 'Externa',
    origin: 'Tecnología en Investigación de Accidentes de Tránsito',
    destination: 'Pregrado en Criminalística',
    originCredits: 96,
    destinationCredits: 160,
    ageYears: 4,
    courses: [
      { origin: 'Reconstrucción de siniestros', dest: 'Procesamiento de escena', match: 82, credits: 4, status: 'success' },
      { origin: 'Toma de evidencias', dest: 'Documentología forense', match: 74, credits: 3, status: 'success' },
      { origin: 'Responsabilidad civil y penal', dest: 'Bioética y derechos humanos', match: 61, credits: 3, status: 'review' }
    ]
  },
  {
    id: 'SOL-021-2025',
    applicant: 'Andrés Galeano',
    type: 'Interna',
    origin: 'Técnico Profesional en Seguridad Vial (presencial)',
    destination: 'Tecnología en Gestión del Servicio de Policía',
    originCredits: 60,
    destinationCredits: 96,
    ageYears: 2,
    courses: [
      { origin: 'Legislación de tránsito', dest: 'Derecho policial', match: 69, credits: 3, status: 'review' },
      { origin: 'Investigación de accidentes', dest: 'Gestión estratégica del servicio', match: 71, credits: 4, status: 'success' },
      { origin: 'Gestión comunitaria vial', dest: 'Ética y transparencia', match: 54, credits: 2, status: 'stop' }
    ]
  },
  {
    id: 'SOL-033-2025',
    applicant: 'Diana Ortiz',
    type: 'Interna',
    origin: 'Tecnología en Mantenimiento Aeronáutico',
    destination: 'Especialización en Seguridad Integral',
    originCredits: 100,
    destinationCredits: 24,
    ageYears: 5,
    courses: [
      { origin: 'Calidad y seguridad aeronáutica', dest: 'Gestión de riesgos integrales', match: 88, credits: 3, status: 'success' },
      { origin: 'Materiales compuestos', dest: 'Ciberseguridad aplicada', match: 45, credits: 3, status: 'review' },
      { origin: 'Estructuras aeronáuticas', dest: 'Seguridad corporativa', match: 42, credits: 4, status: 'stop' }
    ]
  }
];

const carouselSlides = [
  {
    title: 'Movilidad interna',
    body: 'Rutas flexibles desde programas técnicos laborales hacia ciclos tecnológicos y profesionales.',
    image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af05e0?auto=format&fit=crop&w=900&q=60'
  },
  {
    title: 'Cumplimiento normativo',
    body: 'Alertas automáticas sobre topes de créditos (50% externos, 70% internos) y vigencia de asignaturas.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=60'
  },
  {
    title: 'Acceso administrativo',
    body: 'El prototipo inicia en el login y habilita el rol administrador tras validar credenciales visibles.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=60'
  }
];

const dashboardData = {
  totals: [
    { title: 'Solicitudes procesadas', value: 124, foot: '+12% vs. semestre anterior' },
    { title: 'Tasa de aprobación', value: '78%', foot: 'Promedio interno + externo' },
    { title: 'Créditos homologados', value: '1.240', foot: 'Equivale al 62% promedio interno' },
    { title: 'Tiempo de respuesta', value: '6.2 días', foot: 'Promedio radicación a concepto' }
  ],
  typeDistribution: [
    { label: 'Internas', percent: 65 },
    { label: 'Externas', percent: 35 }
  ],
  trend: [65, 72, 70, 78]
};

let activeSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
  setupLogin();
});

function setupLogin() {
  const overlay = document.getElementById('login-overlay');
  const app = document.getElementById('app');
  const loginBtn = document.getElementById('login-btn');
  const userInput = document.getElementById('login-user');
  const passInput = document.getElementById('login-pass');
  const message = document.getElementById('login-message');
  const adminPill = document.getElementById('admin-pill');

  if (!overlay || !app) {
    startApp();
    return;
  }

  app.classList.add('hidden');

  const tryLogin = () => {
    const isValid = userInput.value.trim().toLowerCase() === 'comite@diepo.edu.co' && passInput.value === 'SIMHA2025!';
    if (isValid) {
      overlay.classList.add('hidden');
      app.classList.remove('hidden');
      adminPill?.classList.remove('hidden');
      if (message) {
        message.textContent = 'Acceso autorizado. Perfil administrador activo.';
        message.classList.remove('error');
      }
      startApp();
    } else if (message) {
      message.textContent = 'Credenciales inválidas. Use comite@diepo.edu.co / SIMHA2025!';
      message.classList.add('error');
    }
  };

  loginBtn?.addEventListener('click', tryLogin);
  passInput?.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      tryLogin();
    }
  });
}

function startApp() {
  const filterLevel = document.getElementById('filter-level');
  const programList = document.getElementById('program-list');
  if (filterLevel && programList) {
    renderPrograms();
    filterLevel.addEventListener('change', renderPrograms);
    document.getElementById('filter-text')?.addEventListener('input', renderPrograms);
  }

  const requestSelect = document.getElementById('request-select');
  if (requestSelect) {
    populateRequests();
    requestSelect.addEventListener('change', () => analyzeRequest());
    analyzeRequest();
  }

  if (document.getElementById('dashboard-cards')) {
    renderDashboard();
  }

  if (document.getElementById('carousel-title')) {
    renderCarousel();
    document.getElementById('carousel-next')?.addEventListener('click', () => changeSlide(1));
    document.getElementById('carousel-prev')?.addEventListener('click', () => changeSlide(-1));
  }
}

function renderPrograms() {
  const level = document.getElementById('filter-level').value;
  const text = document.getElementById('filter-text').value.toLowerCase();
  const container = document.getElementById('program-list');
  container.innerHTML = '';

  programs
    .filter(p => level === 'todos' || p.level === level)
    .filter(p => p.name.toLowerCase().includes(text) || p.courses.some(c => c.name.toLowerCase().includes(text) || c.tag.includes(text)))
    .forEach(program => {
      const card = document.createElement('article');
      card.className = 'program';
      card.innerHTML = `
        <div class="program__header">
          <h4>${program.name}</h4>
          <span class="badge ghost">${program.level}</span>
        </div>
        <p class="program__meta">${program.type} · ${program.credits} créditos totales · 48h/crédito</p>
        <ul class="program__courses">
          ${program.courses.map(c => `<li>${c.name} · ${c.credits} cr.</li>`).join('')}
        </ul>
      `;
      container.appendChild(card);
    });
}

function populateRequests() {
  const select = document.getElementById('request-select');
  select.innerHTML = requests.map(r => `<option value="${r.id}">${r.id} · ${r.applicant} (${r.type})</option>`).join('');
}

function analyzeRequest() {
  const selectedId = document.getElementById('request-select').value || requests[0].id;
  const request = requests.find(r => r.id === selectedId) || requests[0];
  const container = document.getElementById('analysis-results');
  const rulesList = document.getElementById('rules-list');
  const totalCredits = request.courses.filter(c => c.status !== 'stop').reduce((sum, c) => sum + c.credits, 0);
  const percent = Math.round((totalCredits / request.destinationCredits) * 100);
  const limit = request.type === 'Externa' ? 50 : 70;
  const rules = [
    `Tope máximo de homologación ${request.type.toLowerCase()}: ${limit}% (Manual Académico DIEPO)`,
    'Verificación de vigencia: asignaturas >5 años requieren revisión especial',
    'Bloqueo de materias operativas/no homologables según reglamento interno'
  ];
  const alerts = [];

  container.innerHTML = '';
  request.courses.forEach(course => {
    const item = document.createElement('div');
    item.className = 'course-match';
    item.innerHTML = `
      <div class="course-match__header">
        <div>
          <strong>${course.origin}</strong> → <span>${course.dest}</span><br>
          <small>${course.credits} créditos</small>
        </div>
        <div class="course-match__score">${course.match}%</div>
      </div>
      <div class="status ${course.status}">
        ${course.status === 'success' ? 'Sugerida' : course.status === 'review' ? 'Revisión' : 'No homologable'}
      </div>
    `;
    container.appendChild(item);

    if (course.status === 'stop') {
      alerts.push(`La asignatura ${course.origin} no es homologable (formación operativa o similitud insuficiente).`);
    }
    if (course.match < 60 && course.status !== 'stop') {
      alerts.push(`La coincidencia de ${course.origin} es baja (<60%), requiere análisis del comité.`);
    }
  });

  if (percent > limit) {
    alerts.push(`Se excede el porcentaje máximo permitido (${limit}%). Ajustar recomendaciones.`);
  } else if (percent > limit - 10) {
    alerts.push(`La solicitud alcanza ${percent}% del plan destino; revisar cuidadosamente el tope de homologación.`);
  }
  if (request.ageYears >= 5) {
    alerts.push('Existen asignaturas con más de 5 años: marcar para revisión especial de vigencia.');
  }

  rulesList.innerHTML = [...rules, ...alerts].map(rule => `<li>${rule}</li>`).join('');
  document.getElementById('total-credits').textContent = `${totalCredits} créditos sugeridos`;
  document.getElementById('percent-credits').textContent = `${percent}% del plan destino (${request.destinationCredits} cr.)`;

  renderConcept(request, totalCredits, percent, limit, alerts);
}

function renderConcept(request, totalCredits, percent, limit, alerts) {
  const title = document.getElementById('concept-title');
  const body = document.getElementById('concept-body');
  const type = document.getElementById('concept-type');
  const approveBtn = document.getElementById('approve-btn');

  title.textContent = `Concepto preliminar ${request.id}`;
  type.textContent = `${request.type} · ${request.destination}`;
  approveBtn.disabled = false;

  const suggested = request.courses.filter(c => c.status === 'success').map(c => `${c.dest} (${c.credits} cr.)`).join(', ');
  const review = request.courses.filter(c => c.status === 'review').map(c => c.dest).join(', ');
  const blocked = request.courses.filter(c => c.status === 'stop').map(c => c.dest).join(', ');

  const summary = `Se recomienda homologar ${suggested || '—'} por afinidad curricular y equivalencia de créditos (48h/crédito). ` +
    (review ? `Las asignaturas ${review} requieren evidencia adicional o juicio del comité. ` : '') +
    (blocked ? `No se homologa ${blocked} por restricción normativa o baja similitud. ` : '') +
    `El total propuesto es ${totalCredits} créditos (${percent}% del plan destino, límite ${limit}%).`;

  const alertText = alerts.length ? ` Alertas: ${alerts.join(' ')}` : '';
  body.textContent = summary + alertText;
}

function renderDashboard() {
  const cards = document.getElementById('dashboard-cards');
  cards.innerHTML = '';
  dashboardData.totals.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <p class="stat-title">${item.title}</p>
      <p class="stat-value">${item.value}</p>
      <p class="stat-foot">${item.foot}</p>
    `;
    cards.appendChild(card);
  });

  const typeChart = document.getElementById('chart-type');
  typeChart.innerHTML = '';
  dashboardData.typeDistribution.forEach((item, idx) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.left = `${40 + idx * 80}px`;
    bar.style.height = `${item.percent * 2}px`;
    bar.title = `${item.label} ${item.percent}%`;
    typeChart.appendChild(bar);

    const label = document.createElement('div');
    label.style.position = 'absolute';
    label.style.left = `${40 + idx * 80 - 10}px`;
    label.style.bottom = '-10px';
    label.style.color = 'var(--muted)';
    label.style.fontSize = '0.9rem';
    label.textContent = item.label;
    typeChart.appendChild(label);
  });

  const trendChart = document.getElementById('chart-trend');
  trendChart.innerHTML = '';
  const points = dashboardData.trend;
  points.forEach((value, idx) => {
    const x = 40 + idx * 80;
    const y = 220 - value * 2;
    const point = document.createElement('div');
    point.className = 'trend-point';
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;
    point.title = `Semestre ${idx + 1}: ${value}% aprobación`;
    trendChart.appendChild(point);

    if (idx > 0) {
      const prevX = 40 + (idx - 1) * 80;
      const prevY = 220 - points[idx - 1] * 2;
      const length = Math.hypot(x - prevX, y - prevY);
      const angle = Math.atan2(y - prevY, x - prevX) * (180 / Math.PI);
      const line = document.createElement('div');
      line.className = 'trend-line';
      line.style.left = `${prevX}px`;
      line.style.top = `${prevY}px`;
      line.style.width = `${length}px`;
      line.style.transform = `rotate(${angle}deg)`;
      trendChart.appendChild(line);
    }
  });
}

function renderCarousel() {
  const slide = carouselSlides[activeSlide];
  document.getElementById('carousel-title').textContent = slide.title;
  document.getElementById('carousel-body').textContent = slide.body;
  document.getElementById('carousel-image').innerHTML = `<img src="${slide.image}" alt="${slide.title}">`;
}

function changeSlide(step) {
  activeSlide = (activeSlide + step + carouselSlides.length) % carouselSlides.length;
  renderCarousel();
}
