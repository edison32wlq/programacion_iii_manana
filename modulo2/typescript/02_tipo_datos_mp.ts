let stock: number = 30;
let producto: string = 'Laptop Gamer';
let disponible: boolean = true;
let valor: any = 1200;

if(stock > 0 && disponible){
    console.log('Producto disponible en Inventario TECH');
} else {
    console.log('Producto sin stock');
}

let accesorios: string[] = ['Teclado Mecánico', 'Mouse Inalámbrico', 'Laptop Ultrabook'];
for(let i = 0; i < accesorios.length; i++){
    console.log(accesorios[i]);
}

enum EstadoInventario {
    EnRevision,
    EnBodega,
    Vendido
}

console.log(EstadoInventario);
console.log(EstadoInventario.Vendido);
