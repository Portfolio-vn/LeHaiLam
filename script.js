// ============================================================
//  PORTFOLIO SCRIPT — Lê Hải Lâm
//  All evidence paths below are kept exactly as relative local paths.
// ============================================================

const BASE = {
  sensor:   '2. Hoạt động ngoại khóa/a. Sản phẩm cá nhân_ Mạch đo nước',
  awards:   '2. Hoạt động ngoại khóa/c. Giải thưởng thành tích',
  other:    '2. Hoạt động ngoại khóa/d. Hoạt động khác',
  sensorImgs: '2. Hoạt động ngoại khóa/a. Sản phẩm cá nhân_ Mạch đo nước/Hình ảnh công việc trên lớp',
  sensorDocs: '2. Hoạt động ngoại khóa/a. Sản phẩm cá nhân_ Mạch đo nước/Tài liệu điện tử/Thiết kế mạch in',
  sensorVideo: '2. Hoạt động ngoại khóa/a. Sản phẩm cá nhân_ Mạch đo nước/Video thuyết trình',
  icpc:     '2. Hoạt động ngoại khóa/c. Giải thưởng thành tích/ICPC 2026',
  inova:    '2. Hoạt động ngoại khóa/c. Giải thưởng thành tích/INOVA 2025'
};

const EVENTS = {
  sensor: {
    cat: 'Personal Project',
    title: 'Lake Water Quality Sensor (ESP32)',
    org: 'Personal Project · Hanoi-Amsterdam High School',
    time: '2025',
    desc: `<p>Designed and assembled a custom PCB using an ESP32 microcontroller to monitor water temperature, pH, and TDS. The project connects hardware design, sensor data acquisition, IoT transmission, and clear technical documentation.</p>
           <p><strong>Main deliverables:</strong> technical report, 2D/3D PCB design, presentation video, demo videos, and classroom evidence photos.</p>`,
    media: [
      { type:'pdf',   label:'Project Report (PDF)',        path: BASE.sensor + '/Báo cáo/Bao_cao_Hai_Lam.pdf' },
      { type:'video', label:'Presentation Video',          path: BASE.sensorVideo + '/SPCN Hải Lâm.mp4' },
      { type:'video', label:'Product Demo Video 1',        path: BASE.sensorVideo + '/VID_20251231_210014(1).mp4' },
      { type:'video', label:'Product Demo Video 2',        path: BASE.sensorVideo + '/VID_20251231_210014.mp4' },
      { type:'pdf',   label:'Presentation Slides (PDF)',   path: BASE.sensorVideo + '/638413705145041321_copy.pdf' },
      { type:'image', label:'PCB 2D Layout',               path: BASE.sensorDocs + '/2D mạch đo nước HL.png' },
      { type:'image', label:'PCB 3D Render',               path: BASE.sensorDocs + '/3D mạch đo nước HL.png' },
      { type:'pdf',   label:'SPCN_Hai_Lam.pdf',            path: BASE.sensorDocs + '/SPCN_Hai_Lam.pdf' },
      { type:'pdf',   label:'SPCN_Hai_Lam1.pdf',           path: BASE.sensorDocs + '/SPCN_Hai_Lam1.pdf' },
      { type:'pdf',   label:'SPCN_Hai_Lam108.pdf',         path: BASE.sensorDocs + '/SPCN_Hai_Lam108.pdf' },
      { type:'image', label:'Classroom Work 1',            path: BASE.sensorImgs + '/z7158101293315_96d463fceea724faece941f008f82a92.jpg' },
      { type:'image', label:'Classroom Work 2',            path: BASE.sensorImgs + '/z7172406543658_72006c7eca6f5016dd2b94bfce67feea.jpg' },
      { type:'image', label:'Classroom Work 3',            path: BASE.sensorImgs + '/z7355963732464_55c04169bdcfbb652ff1775d2bbb37c3.jpg' },
      { type:'image', label:'Classroom Work 4',            path: BASE.sensorImgs + '/z7355963755484_3591ed1011dbf8de3ffb762f264d959d.jpg' },
      { type:'image', label:'Classroom Work 5',            path: BASE.sensorImgs + '/z7355963764396_1b5d0e590604a1b93df0e5ecd69491e4.jpg' },
      { type:'image', label:'Classroom Work 6',            path: BASE.sensorImgs + '/z7355963796715_8f220cf8e60ae1ac03131ac5d16469e5.jpg' }
    ]
  },
  inova: {
    cat: 'International Award',
    title: 'Gold Medal — INOVA Croatia 2025',
    org: 'International Invention Exhibition INOVA · Croatia',
    time: '2025',
    desc: `<p>Achieved a Gold Medal at INOVA Croatia 2025 with the project <strong>Smart Railway Safety Monitoring System</strong>.</p>`,
    media: [{ type:'pdf', label:'INOVA 2025 Certificate', path: BASE.inova + '/INOVA 2025.pdf' }]
  },
  icpc: {
    cat: 'International Award',
    title: 'Gold Medal — ICPC Korea 2026',
    org: 'ICPC · International Collegiate Programming Contest · Korea',
    time: '2026',
    desc: `<p>Won a Gold Medal at ICPC Korea 2026, demonstrating algorithmic thinking, programming ability, and teamwork under competitive pressure.</p>`,
    media: [
      { type:'image', label:'ICPC 2026 — Photo 1', path: BASE.icpc + '/z7448984125677_8cc65d978f8656a35e606278ece8a604.jpg' },
      { type:'image', label:'ICPC 2026 — Photo 2', path: BASE.icpc + '/z7681485913395_608758126b6f534c6049d26321717b54.jpg' }
    ]
  },
  academic_awards: {
    cat: 'Academic Evidence',
    title: 'Academic Certificates',
    org: 'Hanoi-Amsterdam High School',
    time: '2025–2026',
    desc: `<p>Academic certificate gallery and achievement evidence.</p>`,
    media: [
      { type:'image', label:'Academic Certificate 1', path: BASE.awards + '/z7681485919582_3e02121eaecf6c75262abb73999cd86b.jpg' },
      { type:'image', label:'Academic Certificate 2', path: BASE.awards + '/z7681485928623_b66e8842fc587a33d64855ec7eab8b81.jpg' },
      { type:'image', label:'Academic Certificate 3', path: BASE.awards + '/z7681485930882_23d98fed0023c3d3621fcf1d3818c75f.jpg' },
      { type:'image', label:'Academic Certificate 4', path: BASE.awards + '/z7681485939966_5762c844e5b578d3a8b421c31a5edd67.jpg' },
      { type:'image', label:'Academic Certificate 5', path: BASE.awards + '/z7681485940115_0fe9c7530e541bae8887a515d010f121.jpg' },
      { type:'image', label:'Academic Certificate 6', path: BASE.awards + '/z7681485946326_388d2288959bf652e9cf7e7876f8d951.jpg' },
      { type:'image', label:'Academic Certificate 7', path: BASE.awards + '/z7681485947922_b144502256f23c01a8669f080500f8c5.jpg' },
      { type:'image', label:'Academic Certificate 8', path: BASE.awards + '/z7681485948476_2a2ee007c9857d0732ebeecb5cf326a5.jpg' },
      { type:'image', label:'Academic Certificate 9', path: BASE.awards + '/z7681486000033_1cb141b5c7230eb928bb1456881756ad.jpg' }
    ]
  },
  vex: {
    cat: 'STEM / Robotics',
    title: 'Chassis Captain — VEX Robotics Team 24751A',
    org: 'Hanoi-Amsterdam High School · VEX Robotics V5',
    time: '2025–2026',
    desc: `<p>Served as Chassis Captain and Mechanical Lead, directing the physical engineering phase of the competition robot. Responsibilities included prototyping, structural testing, weight balancing, and mechanical troubleshooting.</p>
           <p><strong>Results:</strong> Innovate Award in the Northern regional qualifier, Judge Award, National Semi-finalist, Silver Award and Special Teamwork Award at Hong Kong University MeckUp Challenge.</p>`,
    media: [{ type:'image', label:'Certificate Screenshot', path: BASE.awards + '/Screenshot 2026-04-01 205218.png' }]
  },
  steams: {
    cat: 'Leadership / Club',
    title: 'President of STEAMS Club — Hanoi-Amsterdam High School',
    org: 'Hanoi-Amsterdam High School',
    time: '2025',
    desc: `<p>Led STEAMS Club activities, coordinated members, and supported a culture of practical science, engineering, and peer learning at school.</p>`,
    media: []
  },
  film: {
    cat: 'Arts / Creative',
    title: 'Chief Director & Screenwriter — Chinese Division Film',
    org: 'Hanoi-Amsterdam High School · Talent Festival 2025',
    time: '2025',
    desc: `<p>Directed and wrote the Chinese Division short film: <em>“我接起了电话，也接起了一整个青春。”</em> The project connected language, storytelling, team management, and visual production.</p>
           <p><a href="https://www.facebook.com/share/v/1MShLJDnAa/" target="_blank" rel="noopener">Open shared video link ↗</a></p>`,
    media: []
  },
  speaker: {
    cat: 'Guest Speaker / Academics',
    title: 'Academic Mathematics Guest Speaker',
    org: "MASKA\'25 · Pandorams 2025",
    time: '2025',
    desc: `<p>Invited as a mathematics speaker and mentor to share academic strategies, exam preparation, and problem-solving methods with younger students.</p>`,
    media: []
  },
  teach: {
    cat: 'Community / Volunteer',
    title: 'Robotics & AI Teaching Program — Nhuan Trach School',
    org: 'Luong Son, Phu Tho Province',
    time: '2025',
    desc: `<p>Organized and delivered a technology outreach program introducing Robotics and AI to students at Nhuan Trach Primary & Secondary School.</p>`,
    media: []
  },
  youth: {
    cat: 'Community / Organization',
    title: 'Expanded Youth Union Executive Committee & The 1% Fund',
    org: 'Hanoi-Amsterdam High School',
    time: '2025',
    desc: `<p>Participated in school-level organization work and logistics for social projects, including The 1% Fund.</p>`,
    media: []
  }
};

// Scroll progress
function updateScrollProgress(){
  const bar = document.getElementById('scrollProgress');
  if(!bar) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const percent = total > 0 ? (window.scrollY / total) * 100 : 0;
  bar.style.width = percent + '%';
}
window.addEventListener('scroll', updateScrollProgress);
updateScrollProgress();

// Reveal animation
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Active nav
const navLinks = document.querySelectorAll('.nav-item');
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll', ()=>{
  let current = sections[0]?.id;
  sections.forEach(sec=>{
    if(window.scrollY >= sec.offsetTop - 160) current = sec.id;
  });
  navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

// Sensor quality simulator
function initSensorSimulator(){
  const temp = document.getElementById('slider-temp');
  const ph = document.getElementById('slider-ph');
  const tds = document.getElementById('slider-tds');
  if(!temp || !ph || !tds) return;
  const vt = document.getElementById('val-temp');
  const vp = document.getElementById('val-ph');
  const vd = document.getElementById('val-tds');
  const badge = document.getElementById('quality-badge');
  const text = document.getElementById('quality-text');
  const log = document.getElementById('console-log');
  function update(){
    const T = Number(temp.value), P = Number(ph.value), D = Number(tds.value);
    vt.textContent = `${T}°C`; vp.textContent = P.toFixed(1); vd.textContent = `${D} ppm`;
    let state='GOOD', cls='good', msg='Water quality parameters are within a safe range.';
    if(P < 6.0 || P > 8.5 || D > 900 || T > 36 || T < 12){
      state='BAD'; cls='bad'; msg='Critical condition detected. Review water source and sensor calibration.';
    }else if(P < 6.5 || P > 8.0 || D > 600 || T > 32 || T < 16){
      state='WARN'; cls='warn'; msg='Some values are near the warning threshold.';
    }
    badge.textContent = state; badge.className = `quality-badge ${cls}`; text.textContent = msg;
    const line = `[${new Date().toLocaleTimeString()}] temp=${T}C | pH=${P.toFixed(1)} | tds=${D}ppm | status=${state}<br>`;
    log.innerHTML = line + log.innerHTML;
  }
  [temp,ph,tds].forEach(el=>el.addEventListener('input', update));
  update();
}
initSensorSimulator();


// Academic certificates gallery — same gallery behavior as the previous version
function initAcademicGallery(){
  if(typeof Swiper === 'undefined') return;
  const gallery = document.querySelector('.acad-swiper');
  if(!gallery) return;
  new Swiper('.acad-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: { rotate: 10, stretch: 0, depth: 120, modifier: 1.4, slideShadows: false },
    pagination: { el: '.acad-swiper .swiper-pagination', clickable: true },
    navigation: { nextEl: '.acad-swiper .swiper-button-next', prevEl: '.acad-swiper .swiper-button-prev' },
    keyboard: { enabled: true }
  });
}
initAcademicGallery();

// Activities filter
function filterActivities(cat, btn){
  document.querySelectorAll('.filter-tab').forEach(x=>x.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.activity-card').forEach(card=>{
    const match = cat === 'all' || card.dataset.cat === cat;
    card.classList.toggle('hidden', !match);
  });
}

// Modal engine
let currentMediaList = [];
let currentMediaIdx = 0;

function escapeAttr(s){
  return String(s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function openModal(id){
  const ev = EVENTS[id];
  if(!ev) return;
  currentMediaList = ev.media || [];
  currentMediaIdx = 0;

  const cat = document.getElementById('modalCat');
  const title = document.getElementById('modalTitle');
  const org = document.getElementById('modalOrg');
  const time = document.getElementById('modalTime');
  const desc = document.getElementById('modalDesc');
  if(cat) cat.textContent = ev.cat || '';
  if(title) title.textContent = ev.title || '';
  if(org) org.textContent = ev.org || '';
  if(time) time.textContent = ev.time || '';
  if(desc) desc.innerHTML = ev.desc || '';

  buildThumbs();
  showMedia(0);

  const overlay = document.getElementById('mainModal');
  if(overlay){
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(){
  const overlay = document.getElementById('mainModal');
  if(overlay){
    overlay.classList.remove('active');
    overlay.style.display = 'none';
  }
  document.body.style.overflow = '';
  const vid = document.querySelector('#modalMedia video');
  if(vid) vid.pause();
}

function handleModalClick(e){
  if(e.target && e.target.id === 'mainModal') closeModal();
}

function buildThumbs(){
  const thumbs = document.getElementById('modalThumbs');
  if(!thumbs) return;
  if(!currentMediaList.length){ thumbs.innerHTML = ''; return; }
  thumbs.innerHTML = currentMediaList.map((item,i)=>{
    if(item.type === 'image'){
      return `<button class="modal-thumb" onclick="showMedia(${i})" title="${escapeAttr(item.label)}"><img src="${escapeAttr(item.path)}" alt="${escapeAttr(item.label)}"></button>`;
    }
    const icon = item.type === 'video' ? 'fa-film' : 'fa-file-pdf';
    return `<button class="modal-thumb" onclick="showMedia(${i})" title="${escapeAttr(item.label)}"><i class="fa-solid ${icon}"></i></button>`;
  }).join('');
}

function showMedia(idx){
  const area = document.getElementById('modalMedia');
  if(!area) return;
  if(!currentMediaList.length){
    area.innerHTML = `<div class="pdf-display"><i class="fa-solid fa-folder-open"></i><span>No local evidence file attached for this item.</span></div>`;
    return;
  }
  if(idx < 0) idx = currentMediaList.length - 1;
  if(idx >= currentMediaList.length) idx = 0;
  currentMediaIdx = idx;
  const item = currentMediaList[idx];
  const oldVid = area.querySelector('video');
  if(oldVid) oldVid.pause();
  area.innerHTML = renderMediaItem(item);
  document.querySelectorAll('.modal-thumb').forEach((t,i)=>t.classList.toggle('active', i === idx));
}

function renderMediaItem(item){
  const nav = currentMediaList.length > 1 ? `
    <button class="image-nav-btn prev" onclick="showMedia(currentMediaIdx - 1)">&#8249;</button>
    <button class="image-nav-btn next" onclick="showMedia(currentMediaIdx + 1)">&#8250;</button>
    <div class="media-counter">${currentMediaIdx + 1} / ${currentMediaList.length}</div>` : '';
  const label = escapeAttr(item.label);
  const path = escapeAttr(item.path);
  if(item.type === 'image'){
    return `${nav}<img class="modal-main-img" src="${path}" alt="${label}" onerror="handleImgError(this)" onclick="openFullImg('${path}','${label}')">`;
  }
  if(item.type === 'video'){
    return `${nav}<div class="video-container"><video controls data-label="${label}" data-path="${path}" onerror="handleVideoError(this)"><source src="${path}" type="video/mp4">Your browser does not support video.</video></div>`;
  }
  return `${nav}<div class="pdf-display"><i class="fa-solid fa-file-pdf"></i><span>${label}</span><a href="${path}" target="_blank" rel="noopener"><i class="fa-solid fa-up-right-from-square"></i> Open Document</a></div>`;
}

function handleImgError(img){
  img.outerHTML = `<div class="media-error"><i class="fa-solid fa-image"></i><span>Failed to load image. Check the local file path.</span></div>`;
}
function handleVideoError(video){
  const label = escapeAttr(video.getAttribute('data-label') || 'Video');
  const path = escapeAttr(video.getAttribute('data-path') || '#');
  video.outerHTML = `<div class="media-error"><i class="fa-solid fa-film"></i><span>${label}</span><a href="${path}" target="_blank" rel="noopener">Open video</a></div>`;
}

// Lightbox
let lbList = [];
let lbIndex = 0;

function openFullImg(src, caption){
  const fromModal = currentMediaList.filter(x=>x.type === 'image').map(x=>({src:x.path, caption:x.label}));
  let found = fromModal.findIndex(x => x.src === src || src.endsWith(x.src));

  if(found >= 0){
    lbList = fromModal;
    lbIndex = found;
  }else{
    const galleryImgs = [...document.querySelectorAll('.acad-swiper img, .gallery-grid img')];
    lbList = galleryImgs.map(img=>({src:img.getAttribute('src'), caption:img.getAttribute('alt') || ''}));
    lbIndex = Math.max(0, lbList.findIndex(x => x.src === src || src.endsWith(x.src)));
    if(!lbList.length) lbList = [{src, caption}];
  }
  renderLightbox();
}
function renderLightbox(){
  const box = document.getElementById('imgLightbox');
  const img = document.getElementById('lbImg');
  const cap = document.getElementById('lbCaption');
  if(!box || !img) return;
  img.src = lbList[lbIndex].src;
  img.alt = lbList[lbIndex].caption || '';
  if(cap) cap.textContent = lbList[lbIndex].caption || '';
  box.classList.add('active');
  box.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  const box = document.getElementById('imgLightbox');
  if(box){ box.classList.remove('active'); box.style.display = 'none'; }
  document.body.style.overflow = document.getElementById('mainModal')?.classList.contains('active') ? 'hidden' : '';
}
function handleLbClick(e){
  if(e.target && e.target.id === 'imgLightbox') closeLightbox();
}
function changeLbImg(delta, e){
  if(e) e.stopPropagation();
  if(!lbList.length) return;
  lbIndex = (lbIndex + delta + lbList.length) % lbList.length;
  renderLightbox();
}

// Project page zoomable images
document.querySelectorAll('.zoomable').forEach((img, idx, arr)=>{
  img.addEventListener('click', ()=>{
    lbList = [...arr].map(x=>({src:x.getAttribute('src'), caption:x.getAttribute('alt') || ''}));
    lbIndex = idx;
    renderLightbox();
  });
});

// Keyboard support
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){ closeLightbox(); closeModal(); }
  if(document.getElementById('imgLightbox')?.classList.contains('active')){
    if(e.key === 'ArrowRight') changeLbImg(1);
    if(e.key === 'ArrowLeft') changeLbImg(-1);
  } else if(document.getElementById('mainModal')?.classList.contains('active') && currentMediaList.length > 1){
    if(e.key === 'ArrowRight') showMedia(currentMediaIdx + 1);
    if(e.key === 'ArrowLeft') showMedia(currentMediaIdx - 1);
  }
});
