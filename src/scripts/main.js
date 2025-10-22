'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Pobierz wszystkie elementy z klasą 'population' z DOM
  const populationElements = document.querySelectorAll('.population');

  // Zamień ich tekstową zawartość na liczby
  const populations = Array.from(populationElements)
    .map(span => {
      const text = span.textContent
        .replace(/\u00A0/g, ' ')       
        .replace(/[^\d.-]/g, '');     
      return Number(text.trim());
    })
    .filter(num => !isNaN(num));      

  // Oblicz sumę
  const total = populations.reduce((acc, num) => acc + num, 0);

  const average = populations.length > 0
    ? total / populations.length
    : 0;

  const formatNumber = num => {
    return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  // Zaktualizuj DOM z obliczonymi wartościami
  const averageSpan = document.querySelector('.average-population');
  const totalSpan = document.querySelector('.total-population');

  if (averageSpan) {
    averageSpan.textContent = formatNumber(Math.round(average));
  }

  if (totalSpan) {
    totalSpan.textContent = formatNumber(total);
  }
});
