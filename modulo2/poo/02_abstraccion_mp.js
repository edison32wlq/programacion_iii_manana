class Producto {
    constructor(nombre, stock) {
        this.nombre = nombre;
        this.stock = stock;
    }

    verificarStock() {
        if (this.stock >= 10) {
            console.log("El producto tiene stock disponible");
        } else {
            console.log("El producto tiene poco stock o está por agotarse");
        }
    }

    mostrar() {
        console.log(this.nombre, this.stock);
    }
}

const laptop = new Producto('Laptop HP Pavilion', 7);

laptop.verificarStock();
laptop.mostrar();
