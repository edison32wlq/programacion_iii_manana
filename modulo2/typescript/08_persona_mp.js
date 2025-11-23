"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoTech = void 0;
var ProductoTech = /** @class */ (function () {
    function ProductoTech(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    ProductoTech.prototype.mostrarInfo = function () {
        console.log("Producto: ".concat(this.nombre, " | Precio: $").concat(this.precio));
    };
    return ProductoTech;
}());
exports.ProductoTech = ProductoTech;
