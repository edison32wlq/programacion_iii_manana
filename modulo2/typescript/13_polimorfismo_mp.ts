import { DispositivoTech } from "./11_herencia_mp";

export class Servidor extends DispositivoTech {
    getCapacidadProcesamiento(): void {
        console.log('Procesamiento de alto rendimiento');
    }
}

const miServidor = new Servidor('Dell', 'Servidor Rack');
console.log(miServidor.marca);
console.log(miServidor.categoria);
console.log(miServidor.getCapacidadProcesamiento());
