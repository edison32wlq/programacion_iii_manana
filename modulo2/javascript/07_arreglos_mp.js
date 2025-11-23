
let productos = ["Laptop", "Teclado", "Monitor", "Mouse"];
let inventarioVacio1 = new Array();
let inventarioVacio2 = [];

console.log("Inventario original:", productos);

console.log(inventarioVacio1);
console.log(inventarioVacio2);

console.log("Acceso a los elementos del inventario");
console.log(productos[0]); 
console.log(productos[3]); 

console.log("Modificar elemento del inventario");
productos[0] = "Laptop Gamer";
console.log(productos);

console.log("Agregar producto al final del inventario");
productos.push("Impresora");
console.log(productos);

console.log("Agregar producto al inicio del inventario");
productos.unshift("Tablet");
console.log(productos);

console.log("Eliminar el último producto del inventario");
productos.pop();
console.log(productos);

console.log("Eliminar el primer producto del inventario");
productos.shift();
console.log(productos);

console.log("Iteración del inventario");

let indice = 0;
console.log("Iteración con While");
while (indice < productos.length) {
    console.log("Producto en posición", indice, "es", productos[indice]);
    indice++;
}

console.log("Iteración con For");
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

console.log("Iteración con For...of");
for (let item of productos) {
    console.log(item);
}

console.log("Iteración con forEach");
productos.forEach(function(item, indice) {
    console.log(indice, item);
});
