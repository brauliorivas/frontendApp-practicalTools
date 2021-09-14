const carrusel = document.getElementsByClassName('carrusel');
const item = document.getElementsByClassName('carrusel-item');
const images = document.getElementsByClassName('image')

const remaining = (index) => {
    array = [];
    for (let i = 0; i < 4 ; i++) {
        array.push(i);
    }
    const final = array.filter( x => x != index);
    return final;
}

const changeColors = (index) => {
    item[index].style.width = "22vw";
    item[index].style.border = "none";
    const indexes = remaining(index);
    carrusel[0].style.backgroundColor = "black";
    item[index].style.backgroundColor = "#f6df1c";
    for (let i of indexes) {
        item[i].style.color = "white";
        images[i].style.filter = "invert(1)";
        item[i].style.backgroundColor = "black";
    }
}

const changeNormal = (index) => {
    item[index].style.width = "20vw";
    item[index].style.border = "5px solid black";
    const indexes = remaining(index);
    carrusel[0].style.backgroundColor = "#f6df1c";
    item[index].style.backgroundColor = "#f6df1c";
    for (let i of indexes) {
        item[i].style.color = "black";
        images[i].style.filter = "invert(0)";
        item[i].style.backgroundColor = "#f6df1c";
    }
}

const replace = (url) => {
    window.location.href = url;
}
