class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    procesarVenta() {
        console.log("Procesando venta del producto . . .");
    }

    calcularDescuento() {
        return this.precio * 0.10;
    }

    calcularGarantia(meses) {
        return meses + 6; // meses adicionales de garantía
    }
}

class Laptop extends Producto {

    calcularDescuento() {
        return this.precio * 0.15;
    }

    calcularGarantia(meses) {
        return meses + 12;
    }
}

class Celular extends Producto {

    calcularDescuento() {
        return this.precio * 0.12;
    }

    calcularGarantia(meses) {
        return meses + 9;
    }
}

const laptopLenovo = new Laptop('Laptop Lenovo IdeaPad 3', 900);
const celularSamsung = new Celular('Samsung Galaxy S23', 1100);

laptopLenovo.procesarVenta();
celularSamsung.procesarVenta();

console.log(laptopLenovo.calcularDescuento());
console.log(celularSamsung.calcularDescuento());
console.log(laptopLenovo.calcularGarantia(12));
console.log(celularSamsung.calcularGarantia(12));
