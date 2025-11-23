export class ProductoTech {
    nombre: string;
    precio: number;

    constructor(
        nombre: string,
        precio: number
    ){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo(): void{
        console.log(`Producto: ${this.nombre} | Precio: $${this.precio}`);
    }
}
