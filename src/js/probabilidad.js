const menuarray = document.getElementById('input-values');
const number = document.getElementById('number-add');
const moderesult = document.getElementById('mode-result');
const meanresult = document.getElementById('mean-result');
const medianresult = document.getElementById('median-result');
const showarray = document.getElementById('show-array');
const index = document.getElementById('number-index');
let array = [];

const sortingObjects = (list) => {
    let orderedList = list.sort( (a,b) => {
        return a[1] - b[1];
    })
    return orderedList;
}
const moda = (list) => {
    const listCount = {};
    list.map( element => {
        listCount[element] ? listCount[element] += 1 : listCount[element] = 1
    });
    const listaArray = sortingObjects(Object.entries(listCount));
    const moda = listaArray[listaArray.length - 1][0];
    const cantidad = listaArray[listaArray.length - 1][1];
    return [moda, cantidad];    
}
const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista    
}
const esPar = (numero) => {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
const sorting = (lista) => {
    let orderedList = lista.sort( (a,b) => {
        return a - b;
    })

    return orderedList;
} 
const mediana = (lista) => {
    let list = sorting(lista)

    let mediana;
    const mitadLista = parseInt(list.length / 2);


    if (esPar(list.length)) {
        const elemento1 = list[mitadLista];
        const elemento2 = list[mitadLista-1];
    
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedio;
    
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}


const calculate = (array) => {
    let arr = [];
    arr.push(moda(array));
    arr.push(calcularMediaAritmetica(array));
    arr.push(mediana(array));
    moderesult.innerText = `La moda es ${arr[0][0]} porque se repite ${arr[0][1]} veces`;
    meanresult.innerText = `La media es ${arr[1].toFixed(2)}`;
    medianresult.innerText = `La mediana es ${arr[2].toFixed(2)}`;
}

const add = (value) => {
    if (number.value !== "") {
        array.push(Number(number.value));
        number.value = '';
        menuarray.innerHTML += `Valor ${array[array.length - 1]} Posición: ${array.length - 1}<br><br>`;
        showarray.innerText = `El array es [${array}]`
        calculate(array);
    }
}

const del = () => {
    if ( index.value !== "") {
        if ((array.length - 1) !== 0) {
            array.splice(parseInt(index.value), 1);
            menuarray.innerHTML = "";
            showarray.innerHTML = `El array es [${array}]`;
            for (let i = 0 ; i < array.length ; i++) {
                menuarray.innerHTML += `Valor ${array[i]} Posición: ${i}<br><br>`;
            }
            calculate(array);
        } else {
            moderesult.innerText = '';
            meanresult.innerText = '';
            medianresult.innerText = '';
            array.splice(parseInt(index.value), 1);
            showarray.innerHTML = `El array es [${array}]`;
            menuarray.innerHTML = '';
        }
        index.value = "";
    }
}