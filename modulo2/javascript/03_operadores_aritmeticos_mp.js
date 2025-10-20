console.log("INVENTARIO TECH");

precioLaptop = 1200;
precioCelular = 800;

console.log("Suma (precio total de ambos productos):");
suma = precioLaptop + precioCelular;
console.log("Resultado:", suma);

console.log("Resta (diferencia de precios entre laptop y celular):");
resta = precioLaptop - precioCelular;
console.log("Resultado:", resta);

console.log("Multiplicación (precio de laptop por cantidad):");
cantidadLaptops = 3;
multiplicacion = precioLaptop * cantidadLaptops;
console.log("Resultado:", multiplicacion);

console.log("División (promedio del precio total entre los dos productos):");
division = suma / 2;
console.log("Resultado:", division);

console.log("Módulo (resto de dividir stock total entre cajas):");
stockTotal = 57;
cajas = 10;
modulo = stockTotal % cajas;
console.log("Resultado:", modulo);

console.log("Potencia (simulación de aumento exponencial de ventas):");
ventasBase = 2;
dias = 4;
potencia = ventasBase ** dias;
console.log("Resultado:", potencia);


console.log("\nOPERADORES DE COMPARACIÓN");

console.log("Igualdad débil (precioLaptop == '1200'):", precioLaptop == "1200");
console.log("Igualdad estricta (precioLaptop === '1200'):", precioLaptop === "1200");
console.log("Desigualdad débil (precioCelular != '800'):", precioCelular != "800");
console.log("Desigualdad estricta (precioCelular !== '800'):", precioCelular !== "800");
console.log("Mayor que (precioLaptop > precioCelular):", precioLaptop > precioCelular);
console.log("Menor que (precioLaptop < precioCelular):", precioLaptop < precioCelular);
console.log("Mayor o igual (stockTotal >= 50):", stockTotal >= 50);
console.log("Menor o igual (stockTotal <= 100):", stockTotal <= 100);


console.log("\nOPERADORES LÓGICOS");

enStock = true;
ofertaActiva = false;

console.log("AND (enStock && ofertaActiva):", enStock && ofertaActiva);
console.log("OR (enStock || ofertaActiva):", enStock || ofertaActiva);
console.log("Negación (!enStock):", !enStock);
