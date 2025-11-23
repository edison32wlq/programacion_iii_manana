
function mostrarInventario(){
    console.log("Mostrando lista de productos del inventario tecnológico");
}

mostrarInventario();

function calcularTotal(precioUnitario, cantidad){
    return precioUnitario * cantidad;
}

let totalLaptop = calcularTotal(800, 4);
console.log("El total por las laptops es $", totalLaptop);


const calcularDescuento = (precio, descuento)=>{
    return precio - (precio * descuento / 100);
}

let precioFinal = calcularDescuento(1000, 10);
console.log("El precio con descuento es $", precioFinal);


const duplicarStock = stock => stock * 2;
console.log("Stock duplicado: ", duplicarStock(15));


function mensajeProducto(nombre, estado = "Disponible"){
    return "Producto: " + nombre + " - Estado: " + estado;
}

let p1 = mensajeProducto("Laptop HP");
let p2 = mensajeProducto("Monitor Samsung", "Agotado");
console.log(p1);
console.log(p2);


function verificarOferta(precio){
    if(precio < 500){
        console.log("Producto en oferta");
    } else {
        console.log("Precio regular");
    }
}

let prod1 = verificarOferta(350);
let prod2 = verificarOferta(900);


function calcularAreaCaja(ancho, alto){
    return (ancho * alto);
}

let caja1 = calcularAreaCaja(3, 6);
let caja2 = calcularAreaCaja(9, 1);

console.log("Área de caja 1:", caja1);
console.log("Área de caja 2:", caja2);