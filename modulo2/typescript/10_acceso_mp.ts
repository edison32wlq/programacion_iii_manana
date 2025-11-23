import { ProductoTech } from "./09_acceso_mp";

const miProducto: ProductoTech = new ProductoTech('Teclado Mecánico RGB');

console.log(miProducto.nombre);
console.log(miProducto.getCodigoInterno());
console.log(miProducto.getAtributes());
