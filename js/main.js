  
  
  // morphing word
  const words = ['Scale.', 'Impact.', 'Design.', 'Build.', 'Ship.'];
  const morph = document.getElementById('morph');
  // pre-create spans so the layout reserves the widest one
  const widest = words.reduce((a,b) => a.length > b.length ? a : b);
  morph.style.minWidth = widest.length + 'ch';
  const spans = words.map((w, i) => {
    const s = document.createElement('span');
    s.className = 'word' + (i === 0 ? ' active' : '');
    s.textContent = w;
    morph.appendChild(s);
    return s;
  });
  let idx = 0;
  setInterval(() => {
    spans[idx].classList.remove('active');
    idx = (idx + 1) % words.length;
    spans[idx].classList.add('active');
  }, 1900);



  // clock
  const clockEl = document.getElementById('clock');
  function tick() {
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    clockEl.textContent = `⏱  ${h.toString().padStart(2,'0')} : ${m} : ${s} ${ampm}`;
  }
  tick(); setInterval(tick, 1000);



  // date (locked to current)
  const dateEl = document.getElementById('date');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const today = new Date();
  dateEl.textContent = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`.toUpperCase();
