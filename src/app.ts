// function calculateArrivalTime(scheduledHour: number, delayHours: number): number {
//     if (scheduledHour < 0 || scheduledHour > 23 || !Number.isInteger(scheduledHour)) {
//         throw new Error('Час прибытия должен быть целым числом от 0 до 23.');
//     }
//     if (!Number.isInteger(delayHours) || delayHours < 0) {
//         throw new Error('Опоздание должно быть неотрицательным целым числом.');
//     }
//     return (scheduledHour + delayHours) % 24;
// }

// // Гарантируем, что DOM загружен (если скрипт в <head> или type="module")
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('arrivalForm');
//     if (!form) return;

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const scheduledInput = document.getElementById('scheduledHour') as HTMLInputElement | null;
//         const delayInput = document.getElementById('delayHours') as HTMLInputElement | null;
//         const output = document.getElementById('result');

//         if (!scheduledInput || !delayInput || !output) {
//             console.error('Не найдены необходимые элементы DOM');
//             return;
//         }

//         try {
//             const scheduled = parseInt(scheduledInput.value, 10);
//             const delay = parseInt(delayInput.value, 10);

//             if (isNaN(scheduled) || isNaN(delay)) {
//                 throw new Error('Оба поля должны содержать числа.');
//             }

//             const result = calculateArrivalTime(scheduled, delay);
//             output.textContent = `Новое время прибытия: ${result} ч.`;
//             output.style.color = 'green';
//         } catch (err) {
//             if (err instanceof Error) {
//                 output.textContent = `Ошибка: ${err.message}`;
//                 output.style.color = 'red';
//             } else {
//                 output.textContent = 'Неизвестная ошибка.';
//                 output.style.color = 'red';
//             }
//         }
//     });
// });


const input = "(,[,],(,),)"; // Входные данные

const transform = input.split(','); //array
const brakets_cercle_close = [];
const brakets_cercle_open = [];
const brakets_box_close = [];
const brakets_box_open= [];
const brakets_figure_close = [];
const brakets_figure_open = [];

transform.forEach(element => {
    element.includes(')') ? brakets_cercle_close.push(element) : '';
    element.includes('(') ? brakets_cercle_open.push(element) : '';
    element.includes('[') ? brakets_box_open.push(element) : '';
    element.includes(']') ? brakets_box_close.push(element) : '';
    element.includes('{') ? brakets_figure_open.push(element) : '';
    element.includes('}') ? brakets_figure_close.push(element) : '';
});

function checkBrakets(){
    console.log(brakets_cercle_close.length === brakets_cercle_open.length  &&  brakets_box_open.length === brakets_box_close.length && brakets_figure_open.length === brakets_figure_close.length ? true : false);
}

checkBrakets();