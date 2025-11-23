// función básica
function saludar(nombre) {
    return "Bienvenido al Inventario TECH, ".concat(nombre);
}
console.log(saludar('Administrador'));
// función flecha
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(10, 5)); // suma precios de ejemplo
function mostrarMensajeInventario() {
    console.log('Inventario TECH Activo');
    console.log('Gestión de productos tecnológicos');
}
mostrarMensajeInventario();
function calcularPrecioConImpuesto(precio) {
    return precio * 1.12; // simulando IVA
}
function calcularPrecioConImpuestoVoid(precio) {
    console.log(precio * 1.12);
}
console.log(calcularPrecioConImpuesto(800)); // precio de laptop
calcularPrecioConImpuestoVoid(50); // precio de mouse
