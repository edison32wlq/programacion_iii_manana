// función básica
function saludar(nombre?: string): string{
    return `Bienvenido al Inventario TECH, ${nombre}`;
}

console.log(saludar('Administrador'));

// función flecha
const sumar = (a: number, b:number): number => {
    return a + b;
}

console.log(sumar(10, 5)); // suma precios de ejemplo

function mostrarMensajeInventario(): void {
    console.log('Inventario TECH Activo');
    console.log('Gestión de productos tecnológicos');
}
mostrarMensajeInventario();

function calcularPrecioConImpuesto(precio: number): number{
    return precio * 1.12; // simulando IVA
}

function calcularPrecioConImpuestoVoid(precio: number): void{
    console.log(precio * 1.12);
}

console.log(calcularPrecioConImpuesto(800)); // precio de laptop
calcularPrecioConImpuestoVoid(50); // precio de mouse
