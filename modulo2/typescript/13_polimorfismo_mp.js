"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servidor = void 0;
var _11_herencia_mp_1 = require("./11_herencia_mp");
var Servidor = /** @class */ (function (_super) {
    __extends(Servidor, _super);
    function Servidor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Servidor.prototype.getCapacidadProcesamiento = function () {
        console.log('Procesamiento de alto rendimiento');
    };
    return Servidor;
}(_11_herencia_mp_1.DispositivoTech));
exports.Servidor = Servidor;
var miServidor = new Servidor('Dell', 'Servidor Rack');
console.log(miServidor.marca);
console.log(miServidor.categoria);
console.log(miServidor.getCapacidadProcesamiento());
