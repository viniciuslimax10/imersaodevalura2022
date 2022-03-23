const valorEntrada = document.querySelector('#valorEntrada');
const valorConvertido = document.querySelector('#valorConvertido');
const valorDigitado = document.querySelector('#valorDigitado');
const valorExibicao = document.querySelector('#valorExibicao');
const inverter = document.querySelector('#inverter');
const taxa = document.querySelector('#taxa');

valorEntrada.addEventListener('change', calcular);
valorConvertido.addEventListener('change', calcular);
valorDigitado.addEventListener('input', calcular);
valorExibicao.addEventListener('input', calcular);

inverter.addEventListener('click', ()=>{
    const temp = valorEntrada.value;
    valorEntrada.value = valorConvertido.value;
    valorConvertido.value= temp;
    calcular();
});

function calcular(){
    const valorEntrada1 = valorEntrada.value;
    const valorConvertido1 = valorConvertido.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${valorEntrada1}`)
    .then(res => res.json())
    .then(res => {
        const novaTaxa = res.rates[valorConvertido1];
        taxa.innerText = `1 ${valorEntrada1} = ${novaTaxa} ${valorConvertido1}`
        valorExibicao.value = (valorDigitado.value * novaTaxa).toFixed(2);
    })
}

calcular();