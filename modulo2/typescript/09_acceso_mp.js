"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoTech = void 0;
var ProductoTech = /** @class */ (function () {
    function ProductoTech(nombre) {
        this.idInventario = 'INV-TECH-001';
        this.nombre = nombre;
        this.generarCodigoInterno();
    }
    ProductoTech.prototype.generarCodigoInterno = function () {
        this.codigoInterno = (new Date()).toDateString();
    };
    ProductoTech.prototype.getCodigoInterno = function () {
        return this.codigoInterno;
    };
    ProductoTech.prototype.getAtributes = function () {
        return {
            nombre: this.nombre,
            codigoInterno: this.codigoInterno,
            id: this.idInventario
        };
    };
    return ProductoTech;
}());
exports.ProductoTech = ProductoTech;
