const cuadrado = document.getElementById('result-square');
const triangulo = document.getElementById('result-triangle');
const circulo = document.getElementById('result-circle');
const PI = Math.PI; 

const perimetroCuadrado = (lado) => {
    return lado * 4;
}

const areaCuadrado = (lado) => {
    return lado ** 2;
} 

const perimetroTriangulo = (lado1,lado2,lado3) => {
    return Number(lado1) + Number(lado2) + Number(lado3);
};

const areaTriangulo = (lado1, lado2, lado3) => {
    if ( (lado1 == lado2) && (lado2 == lado3) ) {
        return Math.round(( lado1 * lado1 * (Math.sqrt(3) / 2)) / 2)
    } else if (lado1 == lado2) {
        beta = Math.acos(1 - ( Math.pow(lado3, 2) / (2 * Math.pow(lado1, 2))));
        senalfa = ( lado1 * Math.sin(beta) ) / lado3;
        return Math.round((lado1 * senalfa * lado3) / 2)
    } else if (lado1 == lado3) {
        beta = Math.acos(1 - ( Math.pow(lado2, 2) / (2 * Math.pow(lado1, 2))));
        senalfa = ( lado1 * Math.sin(beta) ) / lado2;
        return Math.round((lado1 * senalfa * lado2) / 2)
    } else if (lado3 == lado2) {
        beta = Math.acos(1 - ( Math.pow(lado1, 2) / (2 * Math.pow(lado2, 2))));
        senalfa = ( lado2 * Math.sin(beta) ) / lado1;
        return Math.round((lado2 * senalfa * lado1) / 2)
    } else if ( (lado1 != lado2) && (lado2 != lado3)) {
        alfa = Math.acos( (Math.pow(lado2,2) + Math.pow(lado3,2) - Math.pow(lado1, 2) ) / ( 2 * lado2 * lado3 ) );
        return Math.round(( lado2 * Math.sin(alfa) * lado3 ) / 2)
    }
}

const diametroCirculo = (radio) => {
    return Math.round(2 * radio)
}

const perimetroCirculo = (radio) => {
    return Math.round(PI * diametroCirculo(radio));
}

const areaCirculo = (radio) => {
    return Math.round(PI * radio ** 2);
};


const calcularPerimetroCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    cuadrado.innerHTML = `
        <p class="result-calc">El perímetro del</p><p class="result-calc">cuadrado es ${perimetroCuadrado(value)} cm.</p>
    `;
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    cuadrado.innerHTML = `
        <p class="result-calc">El área del</p><p class="result-calc">cuadrado es ${areaCuadrado(value)} cm².</p>
    `;
}

const calcularPerimetroTriangulo = () => {
    const inputA = document.getElementById('InputtrianguloA');
    const valueA = inputA.value;
    const inputB = document.getElementById('InputtrianguloB');
    const valueB = inputB.value;
    const InputC = document.getElementById('InputtrianguloC');
    const valueC = InputC.value;
    triangulo.innerHTML = `
        <p class="result-calc">El perímetro del</p><p class="result-calc">triángulo es ${perimetroTriangulo(valueA, valueB, valueC)} cm.</p>
    `;
}

const calcularAreaTriangulo = () => {
    const inputA = document.getElementById('InputtrianguloA');
    const valueA = Number(inputA.value);
    const inputB = document.getElementById('InputtrianguloB');
    const valueB = Number(inputB.value);
    const InputC = document.getElementById('InputtrianguloC');
    const valueC = Number(InputC.value);
    triangulo.innerHTML = `
        <p class="result-calc">El área del</p><p class="result-calc">triángulo es ${areaTriangulo(valueA, valueB, valueC)} cm².</p>
    `;
}

const calcularPerimetroCircunferencia = () => {
    const input = document.getElementById('InputCircunferencia');
    const value = input.value;
    circulo.innerHTML = `
        <p class="result-calc">El perímetro del</p><p class="result-calc">círculo es ${perimetroCirculo(value)} cm.</p>
    `;
}

const calcularAreaCircunferencia = () => {
    const input = document.getElementById('InputCircunferencia');
    const value = input.value;
    circulo.innerHTML = `
    <p class="result-calc">El área del</p><p class="result-calc">círculo es ${areaCirculo(value)} cm².</p>`;
}

const mostrarResultado = () => {
    return 1;
}