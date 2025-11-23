import { ProductoTech } from "./05_interface_mp";

const producto1: ProductoTech = {
    id: 101,
    nombre: 'Teclado Mecánico RGB'
}

const producto2: ProductoTech = {
    id: 102,
    nombre: 'Laptop Ultrabook Pro',
    descripcion: 'Pantalla 14", 16GB RAM, SSD 512GB'
}

console.log(producto1);
console.log(producto2.id);
console.log(producto1.nombre);
console.log(producto2.descripcion);
console.log(producto2);
console.log(producto2.id);
console.log(producto2.nombre);
console.log(producto2.descripcion);
