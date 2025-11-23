export class ProductoTech {
    public nombre: string;
    private codigoInterno: any;
    protected idInventario: string = 'INV-TECH-001';

    constructor(
        nombre: string
    ){
        this.nombre = nombre;
        this.generarCodigoInterno();
    }

    generarCodigoInterno(): void {
        this.codigoInterno = (new Date()).toDateString();
    }

    getCodigoInterno(): any {
        return this.codigoInterno;
    }

    getAtributes(): any {
        return {
            nombre: this.nombre,
            codigoInterno: this.codigoInterno,
            id: this.idInventario
        }
    }
}
