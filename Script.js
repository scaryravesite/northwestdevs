// ---------- Referral demo ----------
function getOrCreateRef() {
  let code = localStorage.getItem('sr_ref');
  if (!code) {
    code = 'EV-' + Math.random().toString(36).slice(2, 9).toUpperCase();
    localStorage.setItem('sr_ref', code);
  }
  return code;
}

const ref = getOrCreateRef();
document.getElementById('refCode').value = 'ref=' + ref;

document.getElementById('copyRef').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href + '?ref=' + ref);
    alert('Ссылка скопирована');
  } catch (e) {
    prompt('Скопируй вручную', window.location.href + '?ref=' + ref);
  }
});

// ---------- CTA buttons ----------
document.getElementById('joinTG').addEventListener('click', () => {
  window.open('https://t.me/+kKFp6sRpf7U1ZjVi', '_blank');
});
document.getElementById('viewRules').addEventListener('click', () => {
  document.getElementById('modesDetailed').scrollIntoView({ behavior: 'smooth' });
});

// ---------- Ad placeholders rotation ----------
const adSlots = document.querySelectorAll('.ad-slot, .ad-big');
const adMsgs = ['Зарабатывать - Просто. Станьте частью North West. Переходите в Telegram канал ', 'Отключите рекламу - Всего за 2.5$'];
let ai = 0;
setInterval(() => {
  adSlots.forEach(s => { s.innerHTML = adMsgs[ai % adMsgs.length]; });
  ai++;
}, 4500);

// ---------- Simple analytics demo ----------
function bump(k) {
  localStorage.setItem(k, Number(localStorage.getItem(k) || 0) + 1);
}
bump('sr_visits');
