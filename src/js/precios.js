const precio = document.getElementById('precio');
const porcentaje = document.getElementById('porcentaje');
const cupon = document.getElementById('cupon');
const cupones = {"promocode1": 5, "platzi": 25, "javazip": 15, "cplus": 10};
const mostrarprecio = document.getElementById('result-precio');
const mostrardesc = document.getElementById('result-descuento');
const mostrarcupon = document.getElementById('result-cupon');

const calcularDescuentos = () => {
    let price = parseFloat(precio.value);
    let percentage = parseInt(porcentaje.value);
    let coupon = cupon.value.toLowerCase();
    let resultados = calcular(price, percentage, coupon);
    mostrarprecio.innerText = `$${resultados[0]}`;
    mostrardesc.innerText = `$${resultados[1]}`;
    mostrarcupon.innerText = `$${resultados[2]}`;
}

const calcular = (price, percentage, coupon) => {
    let result;
    if (isNaN(percentage) && coupon == "") {
        result = [price, 0, 0]
    } else if (isNaN(percentage) && (coupon in cupones)) {
        let porcentajeCupon = cupones[coupon];
        result = [price - ((price * porcentajeCupon) / 100), 0, price * (porcentajeCupon / 100 )];
    } else if (!isNaN(percentage) && coupon == "") {
        result = [price - price * (percentage / 100), price * (percentage / 100), 0];
    } else if (!isNaN(percentage) && (coupon in cupones)) {
        let precioCupon = price * (cupones[coupon] / 100);
        let precioDescontar = price * (percentage / 100);
        result = [price - precioCupon - precioDescontar, precioDescontar, precioCupon];
    } else {
        console.error(new Error)
    }
    return result;
}