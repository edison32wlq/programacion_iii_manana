class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("Realiza algun sonido");
    }
}

class Perro extends Animal{}

const miPerro = new Perro('Toby');
const miAnimal = new Perro('Lucero');
miPerro.hacerSonido();
miAnimal.hacerSonido();