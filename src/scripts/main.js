'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Pobierz wszystkie elementy z klasą 'population'
  const populationElements = document.querySelectorAll('.population');

  // Zamień ich tekstową zawartość na liczby
  const populations = Array.from(populationElements).map(span => {
    const text = span.textContent
      .replace(/\u00A0/g, ' ')       // zamień NBSP na zwykłą spację
      .replace(/[^\d.-]/g, '');      // usuń wszystko poza cyframi, kropką i minusem
    const num = Number(text.trim());
    return isNaN(num) ? 0 : num;     // traktuj niepoprawne wartości jako 0
  });

  // Oblicz sumę i średnią
  const total = populations.reduce((acc, num) => acc + num, 0);
  const average = populations.length > 0 ? total / populations.length : 0;

  // Funkcja formatująca liczby z separatorem tysięcy na podstawie lokalnych ustawień
  const formatNumber = num => num.toLocaleString(undefined, { maximumFractionDigits: 0 });

  // Znajdź elementy, w których wyświetlamy wyniki
  const averageSpan = document.querySelector('.average-population');
  const totalSpan = document.querySelector('.total-population');

  if (averageSpan) {
    averageSpan.textContent = formatNumber(Math.round(average));
  }
  if (totalSpan) {
    totalSpan.textContent = formatNumber(total);
  }
});
