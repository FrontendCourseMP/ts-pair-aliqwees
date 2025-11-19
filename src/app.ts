function calculateArrivalTime(scheduledHour: number, delayHours: number): number {
    if (scheduledHour < 0 || scheduledHour > 23 || !Number.isInteger(scheduledHour)) {
        throw new Error('Час прибытия должен быть целым числом от 0 до 23.');
    }
    if (!Number.isInteger(delayHours) || delayHours < 0) {
        throw new Error('Опоздание должно быть неотрицательным целым числом.');
    }
    return (scheduledHour + delayHours) % 24;
}

//check sckobki
function checkScobki(value: string) {
    const input = value ?? '';
    const transform = input.split('');//v,a,l,l,u,e

    // Для каждой пары: key — закрывающие, value — открывающие
    const cercle = { open: [] as string[], close: [] as string[] };
    const box = { open: [] as string[], close: [] as string[] };
    const figure = { open: [] as string[], close: [] as string[] };

    transform.forEach(element => {
        // Круглые
        element.includes('(') ? (cercle.close.push(element)) : '';
        // element.includes('(') ? (console.log(element)) : ''; //test
        // element.includes('(') ? (console.log(cercle)) : ''; //test
        element.includes(')') ? cercle.open.push(element) : '';

        // Квадратные
        element.includes('[') ? box.close.push(element) : '';
        element.includes(']') ? box.open.push(element) : '';

        // Фигурные
        element.includes('{') ? figure.close.push(element) : '';
        element.includes('}') ? figure.open.push(element) : '';

    });

    //решаем проблему пустого или ввода без скобок
    if (!input.includes('(') && !input.includes(')') &&
        !input.includes('[') && !input.includes(']') &&
        !input.includes('{') && !input.includes('}')) return 'false';

    const ok =
        cercle.open.length == cercle.close.length &&
        box.open.length == box.close.length &&
        figure.open.length == figure.close.length;

    return ok ? 'true' : 'false';
}

// Гарантируем, что DOM загружен (если скрипт в <head> или type="module")
document.addEventListener('DOMContentLoaded', () => {

    // ##########LABA1#############
    const form = document.getElementById('lab1');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const scheduledInput = document.getElementById('lab1_scheduledHour') as HTMLInputElement | null;
        const delayInput = document.getElementById('lab1_delayHours') as HTMLInputElement | null;
        const output = document.getElementById('lab1_result');

        if (!scheduledInput || !delayInput || !output) {
            console.error('Не найдены необходимые элементы DOM');
            return;
        }

        try {
            const scheduled = parseInt(scheduledInput.value, 10);//int or null
            const delay = parseInt(delayInput.value, 10);

            if (isNaN(scheduled) || isNaN(delay)) {
                throw new Error('Оба поля должны содержать числа.');
            }

            const result = calculateArrivalTime(scheduled, delay);
            output.textContent = `Новое время прибытия: ${result} ч.`;
            output.style.color = 'green';
        } catch (err) {
            if (err instanceof Error) {
                output.textContent = `Ошибка: ${err.message}`;
                output.style.color = 'red';
            } else {
                output.textContent = 'Неизвестная ошибка.';
                output.style.color = 'red';
            }
        }
    });//LAB1


    // ##########LABA2#############
    const form2 = document.getElementById('lab2');
    if (!form2) return;

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        const lab2_result = document.getElementById('lab2_result');
        const lab2_value = document.getElementById('lab2_value') as HTMLInputElement;
        if (!form2 || !lab2_result) return;
        lab2_result.textContent = checkScobki(lab2_value.value);
    });//LAB2

});//DOM




// BY TIMQWEES CODE + ALI HELPER