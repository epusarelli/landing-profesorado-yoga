/* ==========================================================================
   Profesorado de Yoga — Sri Sri School of Yoga
   Lógica del sitio (JavaScript estándar, sin dependencias)
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Configuración ---------- */
  var ACCESS_KEY = 'ac5c8f8b-ae87-4101-beb7-0f90d10ea45e'; // Web3Forms
  var CLOUDINARY_URL = 'https://player.cloudinary.com/embed/?cloud_name=duczzabnr&public_id=SSYS-video_intro_1_-Compresi%C3%B3n_de_v%C3%ADdeo-20260702-121726_t40fb8&autoplay=true&muted=false';
  var TARGET_DATE = new Date('2026-08-29T00:00:00-05:00');

  var IMG = '/assets/images/';

  /* ---------- Datos ---------- */
  var SLIDES = [
    { t: 'MULTI DISCIPLINARIO', b: 'Sri Sri School integra disciplinas como Yoga, Ayurveda y Ciencias del Ambiente y la Salud dentro de un marco académico en común, con criterios específicos de calidad, ética y coherencia pedagógica. Ofrece trayectos formativos, certificaciones y programas de corto, mediano y largo plazo, orientados tanto al desarrollo personal como a la formación profesional.' },
    { t: 'ENFOQUE INNOVADOR', b: 'Su enfoque combina herramientas y tradiciones de conocimiento milenario con la ciencia contemporánea, priorizando la experiencia directa, la reflexión crítica y el impacto real en la vida cotidiana y en la sociedad.' },
    { t: 'VINCULACIÓN ESTRATÉGICA', b: 'Sri Sri School desarrolla sus programas formativos en diálogo con instituciones, organismos y referentes nacionales e internacionales, garantizando un marco de seriedad, trazabilidad y calidad educativa.' }
  ];

  var INSTRUCTORS = [
    { name: 'SRI SRI RAVI SHANKAR', pais: 'India', foto: 'https://cdn.lugc.link/f9389a6e-79c2-4432-8749-c0ce964d9267/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Fundador de El Arte de Vivir y de la Sri Sri School of Yoga. Nacido en India, Sri Sri es un maestro espiritual, líder humanitario y embajador de paz que hace más de 40 años transmite las enseñanzas tradicionales védicas de los antiguos sabios para elevar los valores humanos.' },
    { name: 'SANTIAGO BARRENECHEA', pais: 'Uruguay', foto: 'https://cdn.lugc.link/3542788a-ada1-472b-932e-6513f6d3eab3/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Instructor avanzado de Yoga, meditación y respiración de El Arte de Vivir con más de 15 años de experiencia. Director de Sri Sri School of Yoga para Latinoamérica y Coordinador General de El Arte de Vivir para Latinoamérica.' },
    { name: 'FLORENCIA CIPRIOTA', pais: 'Argentina', foto: 'https://cdn.lugc.link/37868a3e-cf11-439d-8906-004d19014e54/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Docente e instructora avanzada de Yoga, meditación y respiración de El Arte de Vivir. Certificada en India con diploma QCI y Yoga Alliance. Más de siete años formando profesores en Latinoamérica.' },
    { name: 'ESTEBAN PUSARELLI', pais: 'Perú', foto: 'https://cdn.lugc.link/3df11eeb-32f7-446e-89f8-ed91aae5ee63/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Instructor avanzado de respiración y meditación en El Arte de Vivir con más de 14 años de experiencia. Profesor de Yoga certificado por QCI y el Ministerio de Ayush (India). Profesor de Filosofía del Yoga en Sri Sri School of Yoga Latinoamérica.' },
    { name: 'OSVALDO GONZÁLEZ PAPE', pais: 'Argentina', foto: 'https://cdn.lugc.link/3c4e0363-f1f9-45db-9bbc-59d0b75f9800/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Instructor avanzado de Yoga y respiración de El Arte de Vivir. Más de 23 años en el Hatha Yoga y 10 años formando alumnos. Coordinador de Sri Sri School of Yoga para Latinoamérica.' },
    { name: 'ANDRÉS CAMPILONGO', pais: 'Argentina', foto: 'https://cdn.lugc.link/1768e0d6-0dae-42cf-ad74-7ba0a0a0763c/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Licenciado en Kinesiología y Fisiatría, especialista en columna. Instructor avanzado de Yoga y respiración de El Arte de Vivir con más de 12 años de experiencia. Certificado en India con diploma QCI.' },
    { name: 'RITA BERASAIN', pais: 'Argentina', foto: 'https://cdn.lugc.link/0f4af7f5-e5a1-4d24-bd8d-d2a0657365c4/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Licenciada en Kinesiología y Fisiatría (UBA y USAL). Instructora de Hatha y Ashtanga Yoga para adultos y embarazadas. Instructora de respiración de El Arte de Vivir y Ayurveda. Certificada en India con diploma QCI.' },
    { name: 'PAMELA VICENTÍN', pais: 'Argentina', foto: 'https://cdn.lugc.link/1f9fe96a-8da0-4b70-b602-6657d8fd3221/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Diseñadora e instructora de Yoga, meditación y respiración de El Arte de Vivir. Vivió más de cinco años en el Centro Internacional de Bangalore, India, profundizando su formación.' },
    { name: 'LUCIANA CAPOVILLA', pais: 'Chile', foto: 'https://cdn.lugc.link/dbb3baff-09b6-4bf2-8280-c26f6149f4c0/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/1000x/', bio: 'Profesora de Yoga formada en India y Latinoamérica. Instructora de meditación y respiración de El Arte de Vivir con más de diez años de experiencia. Miembro del equipo de coordinación de Sri Sri School of Yoga.' },
    { name: 'CLAUDIO POUSADA', pais: 'Argentina', foto: 'https://cdn.lugc.link/02242f43-1c87-4905-a363-bef8c32f7972/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Diseñador en Comunicación Visual, docente universitario y cofundador de la Fundación El Arte de Vivir. Instructor avanzado de meditación y respiración con más de 18 años de experiencia. Formador de instructores (TTC).' },
    { name: 'MARÍA G. RAMÍREZ', pais: 'Panamá', foto: 'https://cdn.lugc.link/c602ba83-f880-4039-a6d3-9643fa4c1459/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Médica especialista en Ginecología y Obstetricia con más de 30 años de experiencia. Instructora de El Arte de Vivir y presidenta de la Junta Directiva de El Arte de Vivir Panamá.' },
    { name: 'JAVIER FIGUEROA', pais: 'Chile', foto: 'https://cdn.lugc.link/1128e0e0-a813-46c8-9c12-206221eb5856/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/600x/', bio: 'Ingeniero Comercial y consultor en Cultura y Desarrollo Organizacional. Instructor de técnicas de respiración de El Arte de Vivir con más de 20 años de experiencia en Chile, Brasil y Colombia.' }
  ];

  var TESTIMONIALS = [
    { quote: '"Entré buscando aprender yoga y encontré una nueva manera de vivir."', name: 'Alumno', cargo: 'Profesorado de Yoga', img: IMG + 't-alumno-1.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/v1783111484/Testimonio_4_l5x7y9.mp4' },
    { quote: '"Me permitió flexibilizar mi cuerpo y calmar mi mente."', name: 'Alumna', cargo: 'Profesorado de Yoga', img: IMG + 't-alumna-1.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/v1783111803/testimonio_2_aiumrd.mp4' },
    { quote: '"Fue impresionante, mucho más completo de lo que esperaba."', name: 'Egresada', cargo: 'Profesorado de Yoga', img: IMG + 't-alumna-2.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/v1783111936/testimonio_1_yjdunu.mp4' },
    { quote: '"Hoy me siento con muchísima más vitalidad, otra energía y actitud."', name: 'Alumna', cargo: 'Profesorado de Yoga', img: IMG + 't-alumna-4.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/testimonio_3-Compresi%C3%B3n_de_v%C3%ADdeo-20260703-155536_y3vq2u.mp4' },
    { quote: '"Fue algo espectacular en mi vida, me ayudó a ajustar mis emociones, a entender mi cuerpo y mis movimientos."', name: 'Egresada', cargo: 'Profesorado de Yoga', img: IMG + 't-alumna-5.png', frame: IMG + 't-frame-5.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/testimonio_3-Compresi%C3%B3n_de_v%C3%ADdeo-20260703-155536_y3vq2u.mp4' },
    { quote: '"Fue una experiencia transformadora; y el apoyo de los profes como de los mentores fue increíble."', name: 'Egresada', cargo: 'Profesorado de Yoga', img: IMG + 't-alumna-6.png', frame: IMG + 't-frame-6.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/testimonio_3-Compresi%C3%B3n_de_v%C3%ADdeo-20260703-155536_y3vq2u.mp4' },
    { quote: '"Un sueño hecho realidad, y sin saber que lo buscaba."', name: 'Egresada', cargo: 'Profesorado de Yoga', img: IMG + 't-alumna-7.png', frame: IMG + 't-frame-7.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/Egresados_pzk9bp.mp4' },
    { quote: '"Tenía muchas expectativas de conocer esta técnica de respiración, y es muy buena. Hice muchos cursos de meditación y otras cosas, pero este fue algo sorprendente."', name: 'Egresada', cargo: 'Curso Parte 1 · El Arte de Vivir', img: IMG + 't-c1-alumna-2.png', frame: IMG + 't-frame-c1.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/v1782771407/profesorado_2_720p__HD_ho7mvq.mp4' },
    { quote: '"Llegué a un punto en donde me vino una calma increíble, y en verdad estoy muy agradecido."', name: 'Participante', cargo: 'Curso Parte 2 · El Arte del Silencio', img: IMG + 't-participante.png', frame: IMG + 't-frame-part.png', video: 'https://res.cloudinary.com/duczzabnr/video/upload/q_auto/Curso_Parte_2_-_2025_LQ_q42qsi.mp4' }
  ];

  var FAQS = [
    { icon: 'meditate', q: '¿Necesito experiencia previa en yoga?', a: 'No. El aprendizaje empieza desde cero. El 80% de nuestros estudiantes nunca practicó yoga antes de inscribirse. Te acompañamos desde el primer día.' },
    { icon: 'clock', q: '¿Cuánto tiempo tengo que dedicarle por semana?', a: 'Aproximadamente 5 horas semanales: materias on-demand a tu ritmo, 2 clases prácticas en vivo por semana (eliges entre más de 40 horarios) y 1 jornada mensual los sábados.' },
    { icon: 'heart', q: '¿Puedo hacerlo si no quiero dar clases de yoga?', a: 'Sí, completamente. Muchos estudiantes hacen el profesorado como proceso de crecimiento personal, sin ninguna intención de enseñar. Eso es válido y bienvenido.' },
    { icon: 'laptop', q: '¿Cómo funciona la modalidad online?', a: 'Materias grabadas disponibles 24/7, clases prácticas en vivo por Zoom con múltiples horarios y un encuentro mensual intensivo los sábados. Puedes hacerlo desde cualquier lugar del mundo.' },
    { icon: 'certificate', q: '¿Qué certificación recibo al terminar?', a: 'Certificación internacional reconocida por el Ministerio de AYUSH del Gobierno de India, Indian Yoga Association y Yoga Alliance. Válida internacionalmente.' },
    { icon: 'refresh', q: '¿Qué pasa si empiezo y no puedo continuar?', a: 'Escríbenos por WhatsApp y evaluamos tu situación de forma personalizada. Siempre buscamos la mejor solución para que puedas continuar tu camino.' },
    { icon: 'card', q: '¿Cuáles son las formas de pago?', a: 'Transferencia bancaria, tarjeta de crédito o débito (Mercado Pago). Puedes pagar en cuotas, en un solo pago con descuento, o empezar solo con la matrícula.' },
    { icon: 'clipboard', q: '¿Qué requisitos hay para inscribirse al Profesorado?', a: 'Se puede cursar el Profesorado de Yoga sin tener conocimientos previos. El aprendizaje comienza desde donde se encuentra el estudiante, ayudándolo de manera personalizada a evolucionar en su práctica.' },
    { icon: 'calendar', q: '¿Cuántas horas semanales debo dedicarle?', a: 'La dedicación estimada es de 5 horas semanales y una jornada mensual de 6 horas. El profesorado cuenta con una jornada mensual intensiva online en vivo vía Zoom de 6 horas los días sábados de 10 a 16 hs. Materias autoasistidas disponibles con clases on-demand. Es requisito realizar dos clases semanales prácticas en vivo (eligiendo uno de nuestros 40 horarios semanales). Además, mensualmente tendrás tareas y actividades en nuestra plataforma de aprendizaje para profundizar.' },
    { icon: 'user', q: '¿Hay un límite de edad para hacer el profesorado?', a: 'No. Cualquiera que esté apto para realizar yoga puede realizar el profesorado.' },
    { icon: 'sparkle', q: '¿Puedo cursar el profesorado aunque no esté interesado en dar clases luego?', a: 'Sí, se puede cursar el profesorado como un proceso de crecimiento personal, búsqueda espiritual y para aprender acerca del Yoga en profundidad, sin la necesidad de trabajar profesionalmente una vez concluido el programa.' },
    { icon: 'gradcap', q: '¿Cuáles son los requisitos de graduación?', a: 'Asistencia al 85% de las jornadas mensuales, 8 clases prácticas como mínimo por mes, 4 cursos de El Arte de Vivir (2 de ellos, avanzados), 100% de las tareas y TPs entregados y los exámenes de primer y segundo año aprobados.' },
    { icon: 'briefcase', q: '¿Cuentan con oportunidades de salida laboral?', a: 'Sí, Sri Sri School of Yoga tiene especial interés en contratar a los profesionales que forma y les da prioridad para ocupar las plazas vacantes en nuestras clases.' }
  ];

  var ICONS = {
    meditate: '<circle cx="12" cy="5" r="2"></circle><path d="M12 9c-1 0-1.9.6-2.3 1.6L8 15h8l-1.7-4.4C13.9 9.6 13 9 12 9z"></path><path d="M4 18c2.2-1.4 5-2 8-2s5.8.6 8 2c-2.2 1.4-5 2-8 2s-5.8-.6-8-2z"></path>',
    clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    heart: '<path d="M12 20.5C7 17 3.5 13.8 3.5 9.6 3.5 6.9 5.6 5 8.1 5c1.7 0 3.1.9 3.9 2.3C12.8 5.9 14.2 5 15.9 5c2.5 0 4.6 1.9 4.6 4.6 0 4.2-3.5 7.4-8.5 10.9z"></path>',
    laptop: '<rect x="3" y="5" width="18" height="11" rx="1.5"></rect><path d="M2 20h20"></path>',
    certificate: '<path d="M7 3.5h10a1 1 0 0 1 1 1V13H6V4.5a1 1 0 0 1 1-1z"></path><circle cx="12" cy="17" r="3"></circle><path d="M10.5 19.5L10 22l2-1 2 1-.5-2.5"></path>',
    refresh: '<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8"></path><path d="M20 3.5V8h-4.5"></path><path d="M20 12a8 8 0 0 1-13.7 5.7L4 16"></path><path d="M4 20.5V16h4.5"></path>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 10h18M7 15h4"></path>',
    clipboard: '<rect x="5" y="5" width="14" height="16" rx="1.5"></rect><path d="M9 5V3.5h6V5"></path><path d="M9 12l2 2 4-4"></path>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 9h18M8 3v4M16 3v4"></path>',
    user: '<circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"></path>',
    sparkle: '<path d="M12 3l1.9 4.9L19 9.8l-4.4 2.1L12 17l-2.6-5.1L5 9.8l5.1-1.9z"></path>',
    gradcap: '<path d="M12 4L2 9l10 5 10-5-10-5z"></path><path d="M6 11v4.5c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9V11"></path>',
    briefcase: '<rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8"></path>'
  };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function frameUrl(i) {
    var t = TESTIMONIALS[i];
    if (!t) return '';
    if (t.frame) return t.frame;
    if (!t.video) return t.img || '';
    var offsets = [3, 3, 3, 2, 6, 10, 3, 3];
    var n = offsets[i] === undefined ? 3 : offsets[i];
    return t.video
      .replace('/upload/q_auto/', '/upload/so_' + n + ',c_fill,ar_9:16,w_640,f_jpg/')
      .replace('.mp4', '.jpg');
  }

  /* ===================== COUNTDOWN ===================== */
  function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }
  function updateCountdown() {
    var diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
    var d = Math.floor(diff / 86400000); diff -= d * 86400000;
    var h = Math.floor(diff / 3600000); diff -= h * 3600000;
    var m = Math.floor(diff / 60000); diff -= m * 60000;
    var s = Math.floor(diff / 1000);
    var map = { days: pad(d), hours: pad(h), min: pad(m), sec: pad(s) };
    $all('[data-cd]').forEach(function (el) {
      var k = el.getAttribute('data-cd');
      if (map[k] !== undefined) el.textContent = map[k];
    });
  }

  /* ===================== SLIDER PROGRAMA ===================== */
  var progIdx = 0;
  function renderProg() {
    var s = SLIDES[progIdx];
    $('#prog-num').textContent = ('0' + (progIdx + 1)) + ' / 0' + SLIDES.length;
    $('#prog-title').textContent = s.t;
    $('#prog-body').textContent = s.b;
    var dots = $('#prog-dots');
    dots.innerHTML = '';
    SLIDES.forEach(function (_, k) {
      var sp = document.createElement('span');
      sp.className = 'dot' + (k === progIdx ? ' active' : '');
      sp.addEventListener('click', function () { progIdx = k; renderProg(); });
      dots.appendChild(sp);
    });
  }

  /* ===================== INSTRUCTORES ===================== */
  var instIdx = 0, instTimer = null;
  function renderInst() {
    var it = INSTRUCTORS[instIdx];
    var foto = $('#inst-foto');
    foto.src = it.foto; foto.alt = it.name;
    $('#inst-name').textContent = it.name;
    $('#inst-pais').textContent = it.pais;
    $('#inst-bio').textContent = it.bio;
    var dots = $('#inst-dots');
    dots.innerHTML = '';
    INSTRUCTORS.forEach(function (_, k) {
      var sp = document.createElement('span');
      sp.className = 'dot dot-light' + (k === instIdx ? ' active' : '');
      sp.addEventListener('click', function () { instIdx = k; renderInst(); resetInstTimer(); });
      dots.appendChild(sp);
    });
  }
  function resetInstTimer() {
    if (instTimer) clearInterval(instTimer);
    instTimer = setInterval(function () { instIdx = (instIdx + 1) % INSTRUCTORS.length; renderInst(); }, 4000);
  }

  /* ===================== TESTIMONIOS ===================== */
  var tsmIdx = 0, tsmTimer = null, tsmPlaying = false;
  function renderTsm() {
    var t = TESTIMONIALS[tsmIdx];
    var box = $('#tsm-video');
    // limpiar cualquier video previo
    var oldVid = box.querySelector('video');
    if (oldVid) oldVid.remove();
    var poster = $('#tsm-poster');
    var play = box.querySelector('.tsm-play');
    var cap = box.querySelector('.tsm-video-caption');
    if (tsmPlaying && t.video) {
      poster.style.display = 'none';
      if (play) play.style.display = 'none';
      if (cap) cap.style.display = 'none';
      var v = document.createElement('video');
      v.src = t.video;
      v.poster = frameUrl(tsmIdx) || t.img;
      v.controls = true; v.autoplay = true; v.playsInline = true;
      box.appendChild(v);
    } else {
      poster.style.display = '';
      poster.src = frameUrl(tsmIdx) || t.img;
      poster.alt = t.name;
      if (play) play.style.display = '';
      if (cap) cap.style.display = '';
    }
    $('#tsm-quote').textContent = t.quote;
    var av = $('#tsm-avatar');
    av.src = t.img; av.alt = t.name;
    $('#tsm-name').textContent = t.name;
    $('#tsm-cargo').textContent = t.cargo;
    var dots = $('#tsm-dots');
    dots.innerHTML = '';
    TESTIMONIALS.forEach(function (_, k) {
      var sp = document.createElement('span');
      sp.className = 'dot' + (k === tsmIdx ? ' active' : '');
      sp.addEventListener('click', function () { tsmIdx = k; tsmPlaying = false; renderTsm(); resetTsmTimer(); });
      dots.appendChild(sp);
    });
  }
  function resetTsmTimer() {
    if (tsmTimer) clearInterval(tsmTimer);
    tsmTimer = setInterval(function () {
      if (!tsmPlaying) { tsmIdx = (tsmIdx + 1) % TESTIMONIALS.length; renderTsm(); }
    }, 7000);
  }

  /* ===================== FAQ ===================== */
  var faqOpen = null;
  function renderFaq() {
    var list = $('#faq-list');
    list.innerHTML = '';
    FAQS.forEach(function (f, k) {
      var item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML =
        '<div class="faq-q-row">' +
          '<span class="faq-q-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C6852B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[f.icon] || ICONS.heart) + '</svg></span>' +
          '<h3 class="faq-q"></h3>' +
          '<span class="faq-plus"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6852B" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg></span>' +
        '</div>' +
        '<div class="faq-a"><p></p></div>';
      item.querySelector('.faq-q').textContent = f.q;
      item.querySelector('.faq-a p').textContent = f.a;
      item.querySelector('.faq-q-row').addEventListener('click', function () {
        faqOpen = (faqOpen === k) ? null : k;
        $all('.faq-item', list).forEach(function (el, i) {
          el.classList.toggle('open', i === faqOpen);
        });
      });
      list.appendChild(item);
    });
  }

  /* ===================== VIDEO PROGRAMA ===================== */
  function playProgVideo() {
    var box = $('#prog-video');
    if (!box || box.getAttribute('data-playing') === '1') return;
    box.setAttribute('data-playing', '1');
    var url = box.getAttribute('data-video-url') || CLOUDINARY_URL;
    box.innerHTML = '<iframe src="' + url + '" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen frameborder="0"></iframe>';
  }
  function syncProgBtnWidth() {
    var vid = $('#prog-video');
    var wrap = $('#prog-btn-wrap');
    if (!vid || !wrap) return;
    if (window.innerWidth <= 1080) { wrap.style.width = ''; return; }
    var w = vid.offsetWidth;
    if (w) wrap.style.width = w + 'px';
  }

  /* ===================== MODAL / MENÚ / NAV ===================== */
  function openForm() {
    $('#form-modal').classList.add('open');
    $('#reg-form').hidden = false;
    $('#form-success').hidden = true;
  }
  function closeForm() { $('#form-modal').classList.remove('open'); }
  function toggleMenu() { $('#mobile-menu').classList.toggle('open'); }
  function closeMenu() { $('#mobile-menu').classList.remove('open'); }

  function scrollToLabel(label) {
    closeMenu();
    if (!label || label === '__home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    var el = document.querySelector('section[data-screen-label="' + label + '"]');
    if (el) var rect=el.getBoundingClientRect();
    var target=window.scrollY+rect.top-20;
    var extra=Math.max(0,(window.innerHeight-rect.height)/2);
    if(rect.height<window.innerHeight){target-=extra;}
    window.scrollTo({ top: Math.max(0,target), behavior:'smooth' });
  }

  function submitForm(e) {
    e.preventDefault();
    var form = e.target;
    var data = {
      access_key: ACCESS_KEY,
      subject: 'Nuevo registro — Profesorado de Yoga',
      from_name: 'Web Profesorado de Yoga',
      Nombre: form.nombre.value,
      WhatsApp: form.telefono.value,
      Correo: form.email.value,
      'Ciudad/País': form.ciudad.value,
      '¿Practica yoga?': form.practica.value,
      'Motivación': form.motivacion.value,
      '¿Puede invertir?': form.inversion.value,
      Fecha: new Date().toLocaleString('es-PE')
    };
    var btn = $('#modal-submit');
    var err = $('#modal-error');
    err.hidden = true;
    btn.disabled = true;
    btn.textContent = 'ENVIANDO…';
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (r) { return r.json(); }).then(function (out) {
      btn.disabled = false;
      btn.textContent = 'QUIERO MI LUGAR';
      if (out.success) {
        $('#success-name').textContent = form.nombre.value;
        $('#reg-form').hidden = true;
        $('#form-success').hidden = false;
      } else {
        err.textContent = 'No se pudo enviar (' + (out.message || 'error') + '). Intenta de nuevo.';
        err.hidden = false;
      }
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = 'QUIERO MI LUGAR';
      err.textContent = 'No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.';
      err.hidden = false;
    });
  }

  /* ===================== REVEAL ===================== */
  function setupReveal() {
    // Hero: aparición escalonada al cargar
    $all('.hero-anim').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('revealed'); }, 150 + i * 160);
    });
    // Secciones: al entrar en viewport
    var els = $all('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var d = parseInt(entry.target.getAttribute('data-reveal-delay') || '0', 10);
          var target = entry.target;
          setTimeout(function () { target.classList.add('revealed'); }, d);
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
    // Failsafe
    setTimeout(function () { els.forEach(function (el) { el.classList.add('revealed'); }); }, 5000);
  }

  /* ===================== PARTÍCULAS ===================== */
  function mkParticle(W, H) {
    var warm = Math.random() < 0.12;
    return {
      x: Math.random() * W, y: Math.random() * H,
      r: 0.9 + Math.random() * 2.3,
      vy: 0.06 + Math.random() * 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      base: 0.55 + Math.random() * 0.45,
      phase: Math.random() * Math.PI * 2,
      tw: 0.01 + Math.random() * 0.026,
      c: warm ? '255, 250, 240' : '255, 255, 255'
    };
  }
  function initParticles() {
    var canvas = document.getElementById('particle-bg');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, P = [];
    function resize() {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var N = Math.round(Math.min(300, Math.max(130, W / 7)));
      P = []; for (var i = 0; i < N; i++) P.push(mkParticle(W, H));
    }
    resize();
    window.addEventListener('resize', resize);
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < P.length; i++) {
        var p = P[i];
        p.y -= p.vy; p.x += p.vx; p.phase += p.tw;
        if (p.y < -12) { p.y = H + 12; p.x = Math.random() * W; }
        if (p.x < -12) p.x = W + 12; else if (p.x > W + 12) p.x = -12;
        var a = p.base * (0.45 + 0.55 * Math.sin(p.phase));
        if (a <= 0.01) continue;
        var R = p.r * 5.5;
        var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        g.addColorStop(0, 'rgba(' + p.c + ',' + Math.min(1, a * 0.95) + ')');
        g.addColorStop(0.4, 'rgba(' + p.c + ',' + (a * 0.4) + ')');
        g.addColorStop(1, 'rgba(' + p.c + ',0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, 6.283); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,' + Math.min(1, a * 1.3) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 0.75, 0, 6.283); ctx.fill();
      }
      requestAnimationFrame(tick);
    })();
  }

  /* ===================== EVENTOS ===================== */
  function bindEvents() {
    document.addEventListener('click', function (e) {
      var navEl = e.target.closest('[data-nav]');
      if (navEl) { e.preventDefault(); scrollToLabel(navEl.getAttribute('data-nav')); return; }
      var act = e.target.closest('[data-action]');
      if (!act) return;
      var a = act.getAttribute('data-action');
      if (a === 'open-form') { e.preventDefault(); openForm(); }
      else if (a === 'close-form') { if (e.target === act) { e.preventDefault(); closeForm(); } }
      else if (a === 'toggle-menu') { e.preventDefault(); toggleMenu(); }
      else if (a === 'prog-prev') { progIdx = (progIdx - 1 + SLIDES.length) % SLIDES.length; renderProg(); }
      else if (a === 'prog-next') { progIdx = (progIdx + 1) % SLIDES.length; renderProg(); }
      else if (a === 'inst-prev') { instIdx = (instIdx - 1 + INSTRUCTORS.length) % INSTRUCTORS.length; renderInst(); resetInstTimer(); }
      else if (a === 'inst-next') { instIdx = (instIdx + 1) % INSTRUCTORS.length; renderInst(); resetInstTimer(); }
      else if (a === 'play-prog-video') { playProgVideo(); }
      else if (a === 'play-tsm') { if (TESTIMONIALS[tsmIdx].video) { tsmPlaying = true; renderTsm(); } }
    });

    // El backdrop del modal cierra al hacer click fuera de la tarjeta
    var modal = $('#form-modal');
    if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeForm(); });

    var form = $('#reg-form');
    if (form) form.addEventListener('submit', submitForm);

    var inst = $('#inst-carousel');
    if (inst) {
      inst.addEventListener('mouseenter', function () { if (instTimer) clearInterval(instTimer); });
      inst.addEventListener('mouseleave', function () { resetInstTimer(); });
    }

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeForm(); closeMenu(); } });

    window.addEventListener('resize', syncProgBtnWidth);
    window.addEventListener('load', syncProgBtnWidth);
  }

  /* ===================== PÁGINA DE PAGO ===================== */
  function initPago() {
    var KEY = 'ssy_pref_deadline_v1';
    var dl = null;
    try { dl = parseInt(localStorage.getItem(KEY), 10); } catch (e) {}
    if (!dl || isNaN(dl)) {
      dl = Date.now() + 48 * 3600 * 1000;
      try { localStorage.setItem(KEY, String(dl)); } catch (e) {}
    }
    var active = $('#pp-cd-active');
    var expired = $('#pp-cd-expired');
    var elHH = $('#pp-hh'), elMM = $('#pp-mm'), elSS = $('#pp-ss');
    var timer = null;
    function tick() {
      var diff = dl - Date.now();
      if (diff <= 0) {
        if (elHH) elHH.textContent = '00';
        if (elMM) elMM.textContent = '00';
        if (elSS) elSS.textContent = '00';
        if (active) active.style.display = 'none';
        if (expired) expired.style.display = 'flex';
        if (timer) { clearInterval(timer); timer = null; }
        return;
      }
      var s = Math.floor(diff / 1000);
      if (elHH) elHH.textContent = pad(Math.floor(s / 3600));
      if (elMM) elMM.textContent = pad(Math.floor((s % 3600) / 60));
      if (elSS) elSS.textContent = pad(s % 60);
    }
    tick();
    timer = setInterval(tick, 1000);
  }

  /* ===================== LANDING ===================== */
  function initLanding() {
    renderProg();
    renderInst();
    renderTsm();
    renderFaq();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    resetInstTimer();
    resetTsmTimer();
    setupReveal();
    bindEvents();
    syncProgBtnWidth();
    setTimeout(syncProgBtnWidth, 400);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(syncProgBtnWidth, 30); });
  }

  /* ===================== INIT ===================== */
  function init() {
    initParticles();
    if (document.getElementById('prog-num')) initLanding();
    if (document.getElementById('pp-cd')) initPago();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
