for (let i = 1; i <= 10; i++) {
    console.log("Producto número", i);
}

let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log("Total de unidades registradas:", total);

for (let i = 1; i <= 10; i++) {
    let precio = 400 * i;
    console.log("Laptop #", i, "cuesta $", precio);
}

let producto = "LaptopHP";
for (let i = 0; i < producto.length; i++) {
    console.log("Caracter:", producto[i]);
}

let stockInicial = 3;
for (let i = 1; i <= 10; i++) {
    let crecimiento = stockInicial ** i;
    console.log("Crecimiento del inventario:", crecimiento);
}

console.log("Bucle while");
let i = 1;
while (i <= 6) {
    console.log("Producto ID:", i);
    i++;
}

let inventario = [5, 8, 12, 6, 3];
let indice = 0;
while (indice < inventario.length) {
    console.log("Cantidad del producto", indice + 1, "es", inventario[indice]);
    indice++;
}

let cantidad = 1;
while (cantidad <= 10) {
    if (cantidad % 2 == 0) {
        console.log("Producto con stock par:", cantidad);
    }
    cantidad++;
}

let x = 5;
do {
    console.log("Unidades restantes:", x);
    x--;
} while (x != 0);


let r = 1;
do {
    let valor = 5 * r;
    console.log("Precio unitario $5 x", r, "unidades = $", valor);
    r++;
} while (r <= 10);

let existencias = [12, 8, 15, 4, 9];
let w = 0;
let mayor = 0;
while (w < existencias.length) {
    if (existencias[w] > mayor) {
        mayor = existencias[w];
    }
    w++;
}
console.log("La mayor cantidad en inventario es:", mayor);