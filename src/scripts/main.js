// Pobierz i skonwertuj liczbę z tekstu
const getNumber = span => {
  let t = span.textContent.replace(/\u00A0/g, ' ')
                          .replace(/[^\d.,+-]/g, '');
  t = t.trim();
  if (!t || /^[+-.]$/.test(t)) return null;
  const n = Number(t.replace(',', '.'));
  return isNaN(n) ? null : n;
};

// Formatowanie liczb z wykryciem separatora tysięcy
const formatNum = (n, sample) => {
  const sep = sample.match(/[\s,.](?=\d{3})/)?.[0] || ',';
  const nf = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    useGrouping: true
  });
  return nf.format(n).replace(/,/g, sep);
};

// Obliczanie sumy i średniej
const spans = document.querySelectorAll('.population');
const nums = Array.from(spans).map(getNumber).filter(n => n !== null);

const total = nums.reduce((a, b) => a + b, 0);
const avg = nums.length ? total / nums.length : 0;

const totalSpan = document.querySelector('.total-population');
const avgSpan = document.querySelector('.average-population');

if (totalSpan) {
  const firstText = spans.length > 0 ? spans[0].textContent : '';
  totalSpan.textContent = formatNum(total, firstText);
}

if (avgSpan) {
  const firstText = spans.length > 0 ? spans[0].textContent : '';
  avgSpan.textContent = formatNum(avg, firstText);
}


