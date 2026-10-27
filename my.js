// решение квадратного уравнения
function square() {
    const a = +document.querySelector('#A').value;
    const b = +document.querySelector('#B').value;
    const c = +document.querySelector('#C').value;
    const answer = document.querySelector('#korni');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        answer.textContent = 'Проверьте коэффициенты: нужны числа';
        return;
    }

    // вырожденные случаи
    if (a === 0) {
        answer.textContent = b === 0
            ? (c === 0 ? 'Решений бесконечно много' : 'Решений нет')
            : 'Линейное уравнение. Корень x = ' + (-c / b).toFixed(2);
        return;
    }

    const D = b ** 2 - 4 * a * c;

    if (D < 0) {
        answer.textContent = 'Дискриминант D = ' + D.toFixed(2) + '. Действительных корней нет.';
    } else if (D === 0) {
        answer.textContent = 'Дискриминант D = 0. Один корень: x = ' + (-b / (2 * a)).toFixed(2);
    } else {
        const s = Math.sqrt(D);
        const x1 = ((-b + s) / (2 * a)).toFixed(2);
        const x2 = ((-b - s) / (2 * a)).toFixed(2);
        answer.innerHTML = 'Дискриминант D = ' + D.toFixed(2) + '<br>x₁ = ' + x1 + '<br>x₂ = ' + x2;
    }
}

function calculate() {
    const initial = +f.money.value;
    const rate = +f.stavka.value / 100;
    const years = +f.months.value / 12;

    const result = Math.round(initial * (1 + rate) ** years);

    document.querySelector('#mon-before').textContent = initial;
    document.querySelector('#mon-after').textContent = result;

    const gist = document.querySelector('#gist');
    gist.style.height = (initial ? Math.round(100 * result / initial) : 0) + 'px';
}

const f = document.forms.calculator;
f.money.oninput = calculate;
f.months.onchange = calculate;
f.stavka.oninput = calculate;