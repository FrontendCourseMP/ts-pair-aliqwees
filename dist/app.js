"use strict";
function calculateArrivalTime(scheduledHour, delayHours) {
    if (scheduledHour < 0 || scheduledHour > 23 || !Number.isInteger(scheduledHour)) {
        throw new Error('Час прибытия должен быть целым числом от 0 до 23.');
    }
    if (!Number.isInteger(delayHours) || delayHours < 0) {
        throw new Error('Опоздание должно быть неотрицательным целым числом.');
    }
    return (scheduledHour + delayHours) % 24;
}
document.getElementById('arrivalForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const scheduledInput = document.getElementById('scheduledHour');
    const delayInput = document.getElementById('delayHours');
    const output = document.getElementById('result');
    try {
        const scheduled = parseInt(scheduledInput.value, 10);
        const delay = parseInt(delayInput.value, 10);
        if (isNaN(scheduled) || isNaN(delay)) {
            throw new Error('Оба поля должны содержать числа.');
        }
        const result = calculateArrivalTime(scheduled, delay);
        output.textContent = `Новое время прибытия: ${result} ч.`;
        output.style.color = 'green';
    }
    catch (err) {
        output.textContent = `Ошибка: ${err.message}`;
        output.style.color = 'red';
    }
});
