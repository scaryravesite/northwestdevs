function getOrCreateRef() {
  let code = localStorage.getItem('sr_ref');
  if (!code) {
    code = 'EV-' + Math.random().toString(36).slice(2, 9).toUpperCase();
    localStorage.setItem('sr_ref', code);
  }
  return code;
}

const ref = getOrCreateRef();

const refCodeEl = document.getElementById('refCode');
if (refCodeEl) refCodeEl.value = 'ref=' + ref;

const copyRef = document.getElementById('copyRef');
if (copyRef) {
  copyRef.addEventListener('click', async () => {
    const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/index.html');
    const link = base + '?ref=' + ref;
    try {
      await navigator.clipboard.writeText(link);
      alert('Ссылка скопирована: ' + link);
    } catch {
      prompt('Скопируй вручную:', link);
    }
  });
}

document.getElementById('joinTG')?.addEventListener('click', () => {
  window.open('https://t.me/+kKFp6sRpf7U1ZjVi', '_blank');
});

document.getElementById('viewRules')?.addEventListener('click', () => {
  document.getElementById('modesDetailed')?.scrollIntoView({ behavior: 'smooth' });
});

const adSlots = document.querySelectorAll('.ad-slot, .ad-big');
const adMsgs = [
  'Зарабатывать — просто. Станьте частью North West. Переходите в Telegram канал.',
  'Отключите рекламу — всего за 2.5$'
];
let ai = 0;
setInterval(() => {
  adSlots.forEach(s => (s.innerHTML = adMsgs[ai % adMsgs.length]));
  ai++;
}, 4500);

function bump(k) {
  localStorage.setItem(k, Number(localStorage.getItem(k) || 0) + 1);
}
bump('sr_visits');
