class Producto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        console.log(`${this.marca} ${this.modelo} está encendido`);
    }

    enUso() {
        console.log(`${this.marca} ${this.modelo} está siendo utilizado`);
    }

    apagar() {
        console.log(`${this.marca} ${this.modelo} ha sido apagado`);
    }
}

const miProducto = new Producto('Lenovo', 'IdeaPad 3');
miProducto.encender();
miProducto.enUso();
miProducto.apagar();
