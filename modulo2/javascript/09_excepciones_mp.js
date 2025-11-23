try {
    console.log(productoNoRegistrado);
} catch (error) {
    console.log("Mensaje de error:", "El producto no está registrado en el inventario");
}

try {
    console.log("Intentando actualizar el stock del producto...");
    throw new Error("Error: Producto no encontrado en la base de datos");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizado intento de actualización de stock");
}
