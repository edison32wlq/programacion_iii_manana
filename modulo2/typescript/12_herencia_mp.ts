import { DispositivoTech, Laptop } from "./11_herencia_mp";

const miDispositivo = new DispositivoTech('Logitech', 'Mouse');
console.log(miDispositivo.marca);
console.log(miDispositivo.categoria);
miDispositivo.encender();

const miLaptop = new Laptop('ASUS', 'Laptop Gamer');
console.log(miLaptop.marca);
console.log(miLaptop.categoria);
miLaptop.encender();
