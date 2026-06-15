const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipInput = document.getElementById('custom-tip');
const gridInput = document.querySelector('.grid-class');
const error = document.querySelector('.error');

let billValue = 0;
let peopleValue = 1;
let tipValue = 0;

const tipPerson = document.getElementById('tip-amount-result');
const totalPerson = document.getElementById('total-result');
const resetBtn = document.getElementById('btn-reset');
const inputs = document.querySelector('.inputs');

inputs.addEventListener('submit', (e) => {
    e.preventDefault();
})


function calcularTodo() {

    error.style.display = 'none';

    if (peopleValue < 1) {
        tipPerson.textContent = "$0.00";
        totalPerson.textContent = "$0.00";
        error.style.display = "flex";
        return;
    }
    

    if(billValue <= 0 ) {
        tipPerson.textContent = "$0.00";
        totalPerson.textContent = "$0.00";
        return;
    }

    const totalTip = (billValue * tipValue) / 100;
    const tipAmount = totalTip / peopleValue;
    const  totalValue = (billValue / peopleValue) + tipAmount;

    tipPerson.textContent = `$${tipAmount.toFixed(2)}`;
    totalPerson.textContent = `$${totalValue.toFixed(2)}`;
};

billInput.addEventListener('input', (e) => {
    billValue = parseFloat(e.target.value) || 0;
    calcularTodo();
});

peopleInput.addEventListener('input', (e) => {
    peopleValue = parseInt(e.target.value) || 0;
    calcularTodo();
});

gridInput.addEventListener('click', (e) => {
    const botonPulsado = e.target;

    if (botonPulsado. tagName === 'BUTTON') {
        tipInput.value ="";

        const botonActivoAnterior = gridInput.querySelector('button.active');
        if (botonActivoAnterior) {
            botonActivoAnterior.classList.remove('active');
        }

        botonPulsado.classList.add('active');

        const porcentajeTexto = botonPulsado.textContent;
        tipValue = parseFloat(porcentajeTexto);

        calcularTodo();
    }
});

tipInput.addEventListener('input', (e) => {

    const botonActivoAnterior = gridInput.querySelector('button.active');
    if (botonActivoAnterior) {
        botonActivoAnterior.classList.remove('active');
    }

    tipValue = parseFloat(e.target.value) || 0;
    calcularTodo();
});

resetBtn.addEventListener('click', () => {

    error.style.display ='none';

    const botonActivoAnterior = gridInput.querySelector('button.active');
    if (botonActivoAnterior) {
        botonActivoAnterior.classList.remove('active');
    }

    billValue = 0;
    tipValue = 0;
    peopleValue = 1;

    billInput.value = "";
    peopleInput.value = "";
    tipInput.value = "";
    tipPerson.textContent = "$0.00";
    totalPerson.textContent = "$0.00";
});


