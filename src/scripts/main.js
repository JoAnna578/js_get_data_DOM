'use strict';

// Pobierz wszystkie elementy z klasą 'population'
const populationElements = document.querySelectorAll('.population');

// Zamień ich tekstową zawartość na liczby
const populations = Array.from(populationElements)
  .map(span => Number(span.textContent.replace(/,/g, '').trim()))
  .filter(num => !isNaN(num));

// Oblicz sumę
const total = populations.reduce((acc, num) => acc + num, 0);

// Oblicz średnią
const average = total / populations.length;

// Funkcja formatująca liczby z separatorem tysięcy
const formatNumber = num => num.toLocaleString('en-US');

// Wstaw dane do odpowiednich elementów na stronie
const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

if (averageSpan) {
  averageSpan.textContent = formatNumber(Math.round(average));
}

if (totalSpan) {
  totalSpan.textContent = formatNumber(total);
}
