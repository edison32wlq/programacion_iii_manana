var stock = 30;
var producto = 'Laptop Gamer';
var disponible = true;
var valor = 1200;
if (stock > 0 && disponible) {
    console.log('Producto disponible en Inventario TECH');
}
else {
    console.log('Producto sin stock');
}
var accesorios = ['Teclado Mecánico', 'Mouse Inalámbrico', 'Laptop Ultrabook'];
for (var i = 0; i < accesorios.length; i++) {
    console.log(accesorios[i]);
}
var EstadoInventario;
(function (EstadoInventario) {
    EstadoInventario[EstadoInventario["EnRevision"] = 0] = "EnRevision";
    EstadoInventario[EstadoInventario["EnBodega"] = 1] = "EnBodega";
    EstadoInventario[EstadoInventario["Vendido"] = 2] = "Vendido";
})(EstadoInventario || (EstadoInventario = {}));
console.log(EstadoInventario);
console.log(EstadoInventario.Vendido);
