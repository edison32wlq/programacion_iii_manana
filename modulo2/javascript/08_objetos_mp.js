console.log("Inventario TECH");
let producto = {
    nombre: "Laptop Lenovo IdeaPad 3",
    categoria: "Laptop",
    precio: 750,
    stock: 10
};

console.log(producto);
console.log(producto.nombre);
console.log(producto.categoria);
console.log(producto["precio"]);

console.log("Modificacion de una clave del objeto");
producto.nombre = "Laptop HP Pavilion";
console.log(producto);

console.log("Incluir clave al objeto");
producto.proveedor = "TechStore S.A.";
console.log(producto);

console.log("Eliminar clave al objeto");
delete producto.proveedor;
console.log(producto);

console.log("Recorrer un objeto");
for (let clave in producto) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(producto));
console.log("Mostrar con Object.values");
console.log(Object.values(producto));

console.log("Objetos Anidados");
let inventario = {
    categoria: "Celulares",
    responsable: "Carlos Torres",
    ubicacion: "Bodega Central",
    contacto: {
        correo: "carlos@techstore.com",
        telefono: "022345678",
        celular: "0998765432"
    },
    fecha_actualizacion: "2025-11-04",
    productos: [
        {
            nombre: "Samsung Galaxy S23",
            stock: 15,
            precio: 950
        },
        {
            nombre: "iPhone 15 Pro",
            stock: 8,
            precio: 1200
        }
    ]
};

console.log("Inventario: ", inventario);
