let stock = 35;

if (stock > 30) {
    console.log("Inventario alto de laptops");
}


let codigoAcceso = "lap123";
if (codigoAcceso === "lap12345") {
    console.log("Acceso permitido al sistema de inventario");
} else {
    console.log("Código incorrecto, acceso denegado");
}


let bateria = 7;
if (bateria >= 9) {
    console.log("Batería llena");
} else if (bateria >= 6) {
    console.log("Batería media");
} else {
    console.log("Batería baja, conectar cargador");
}


let edadEmpleado = 20;
let tienePermiso = true;
if (edadEmpleado >= 18) {
    if (tienePermiso) {
        console.log("Empleado autorizado para gestionar el inventario");
    } else {
        console.log("Empleado necesita permiso para acceder al sistema");
    }
} else {
    console.log("Empleado menor de edad, acceso restringido");
}


let producto = "laptop";

switch (producto) {
    case "laptop":
        console.log("Producto principal del inventario");
        break;
    case "mouse":
        console.log("Accesorio de entrada");
        break;
    default:
        console.log("Producto no registrado");
}



let precio1 = 1100;
let precio2 = 750;
let precio3 = 300;

if (precio1 > precio2 && precio1 > precio3) {
    console.log("La laptop 1 es la más cara");
} else if (precio2 > precio1 && precio2 > precio3) {
    console.log("La laptop 2 es la más cara");
} else {
    console.log("La laptop 3 es la más cara");
}


let productoA = prompt("Incluye el nombre del primer producto");
let productoB = prompt("Incluye el nombre del segundo producto");
let productoC = prompt("Incluye el nombre del tercer producto");