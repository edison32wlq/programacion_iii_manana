export class DispositivoTech {
    public marca: string;
    public categoria: string;

    constructor(marca: string, categoria: string){
        this.marca = marca;
        this.categoria = categoria;
    }

    encender(): void {
        console.log('Dispositivo tecnológico encendido');
    }
}

export class Laptop extends DispositivoTech {}
