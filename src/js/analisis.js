const inversion = document.getElementById('aporte');
const interest = document.getElementById('porcentaje');
const years = document.getElementById('years');
const result = document.getElementById('result');

const calcular = () => {
    return Number(inversion.value) * (1 + Number(interest.value)/100)**parseInt(years.value)
}

const print = () => {
    const final = calcular();
    result.innerText = `Después de ${parseInt(years.value) } años, tendrás $${final.toFixed(2)}`;
} 

const reset = () => {
    inversion.value = "";
    interest.value = "";
    years.value = "";
    result.innerText = "";
}