class Producto {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrarFuncion() {
        console.log("Realiza alguna función del dispositivo");
    }
}

class Celular extends Producto {}

const miCelular = new Celular('Samsung Galaxy S23');
const miProducto = new Celular('iPhone 15 Pro');
miCelular.mostrarFuncion();
miProducto.mostrarFuncion();
