const spans = document.querySelectorAll('.population');
const nums = Array.from(spans)
  .map(getNumber)
  .filter(n => n !== null);

const total = nums.reduce((a, b) => a + b, 0);
const avg = nums.length ? total / nums.length : 0;

const firstText = spans.length > 0 ? spans[0].textContent : '';
const totalSpan = document.querySelector('.total-population');
const avgSpan = document.querySelector('.average-population');

if (totalSpan) {
  totalSpan.textContent = formatNum(total, firstText);
}

if (avgSpan) {
  avgSpan.textContent = formatNum(avg, firstText);
}


