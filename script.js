const programs = [
  {
    name: 'Tecnólogo en Seguridad Vial',
    level: 'Tecnológico',
    credits: 96,
    courses: [
      { name: 'Legislación de tránsito', credits: 3, tag: 'normativa' },
      { name: 'Investigación de accidentes', credits: 4, tag: 'investigación' },
      { name: 'Criminalística aplicada', credits: 3, tag: 'investigación' },
      { name: 'Primer respondiente', credits: 2, tag: 'operativo' }
    ]
  },
  {
    name: 'Pregrado en Derecho Policial',
    level: 'Pregrado',
    credits: 160,
    courses: [
      { name: 'Derecho Penal I', credits: 3, tag: 'derecho' },
      { name: 'Procedimiento Penal', credits: 3, tag: 'derecho' },
      { name: 'Derecho Administrativo Policial', credits: 3, tag: 'normativa' },
      { name: 'Investigación Criminal', credits: 4, tag: 'investigación' }
    ]
  },
  {
    name: 'Especialización en Investigación Criminal',
    level: 'Posgrado',
    credits: 26,
    courses: [
      { name: 'Metodología Investigativa', credits: 3, tag: 'investigación' },
      { name: 'Cadena de custodia avanzada', credits: 2, tag: 'investigación' },
      { name: 'Análisis forense digital', credits: 3, tag: 'tecnologia' },
      { name: 'Ética policial aplicada', credits: 2, tag: 'normativa' }
    ]
  },
  {
    name: 'Técnico Profesional en Convivencia y Seguridad',
    level: 'Técnico',
    credits: 60,
    courses: [
      { name: 'Convivencia ciudadana', credits: 3, tag: 'comunidad' },
      { name: 'Gestión de riesgos', credits: 3, tag: 'operativo' },
      { name: 'Procedimientos policiales', credits: 3, tag: 'operativo' }
    ]
  }
];

const requests = [
  {
    id: 'SOL-014-2025',
    applicant: 'Myriam Valdés',
    type: 'Externa',
    origin: 'Tecnólogo en Seguridad Vial',
    destination: 'Pregrado en Derecho Policial',
    originCredits: 92,
    destinationCredits: 160,
    ageYears: 4,
    courses: [
      { origin: 'Legislación de tránsito', dest: 'Derecho Administrativo Policial', match: 82, credits: 3, status: 'success' },
      { origin: 'Investigación de accidentes', dest: 'Investigación Criminal', match: 74, credits: 4, status: 'success' },
      { origin: 'Criminalística aplicada', dest: 'Investigación Criminal', match: 61, credits: 3, status: 'review' },
      { origin: 'Primer respondiente', dest: 'Procedimiento Penal', match: 28, credits: 2, status: 'stop' }
    ]
  },
  {
    id: 'SOL-021-2025',
    applicant: 'Andrés Galeano',
    type: 'Interna',
    origin: 'Técnico Profesional en Convivencia y Seguridad',
    destination: 'Tecnólogo en Seguridad Vial',
    originCredits: 60,
    destinationCredits: 96,
    ageYears: 2,
    courses: [
      { origin: 'Convivencia ciudadana', dest: 'Legislación de tránsito', match: 69, credits: 3, status: 'review' },
      { origin: 'Gestión de riesgos', dest: 'Investigación de accidentes', match: 71, credits: 3, status: 'success' },
      { origin: 'Procedimientos policiales', dest: 'Primer respondiente', match: 54, credits: 2, status: 'stop' }
    ]
  },
  {
    id: 'SOL-033-2025',
    applicant: 'Diana Ortiz',
    type: 'Interna',
    origin: 'Tecnólogo en Seguridad Vial',
    destination: 'Especialización en Investigación Criminal',
    originCredits: 96,
    destinationCredits: 26,
    ageYears: 5,
    courses: [
      { origin: 'Investigación de accidentes', dest: 'Metodología Investigativa', match: 88, credits: 3, status: 'success' },
      { origin: 'Criminalística aplicada', dest: 'Cadena de custodia avanzada', match: 75, credits: 2, status: 'success' },
      { origin: 'Legislación de tránsito', dest: 'Ética policial aplicada', match: 40, credits: 3, status: 'review' }
    ]
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

document.addEventListener('DOMContentLoaded', () => {
  renderPrograms();
  populateRequests();
  renderDashboard();
  document.getElementById('filter-level').addEventListener('change', renderPrograms);
  document.getElementById('filter-text').addEventListener('input', renderPrograms);
  document.getElementById('request-select').addEventListener('change', () => analyzeRequest());
  analyzeRequest();
});

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
        <p class="stat-foot">${program.credits} créditos totales · 48h/crédito</p>
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
