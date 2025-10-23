console.log("FUNCIONES");
console.log("FORMA CLASICA");

function saludar(){
    console.log("Hola desde una Funcion clasica");
}

saludar();

console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a,b){
    return a+b;
}

let resultado = sumar(4,9);
console.log("la suma es ", resultado);

console.log("FUNCION FLECHA");
const resta = (a,b)=>{
    return a-b;
}

let resultadoResta = resta(9,5);
console.log("la resta es ", resultadoResta);


console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x =>x*x;
console.log("cuadrado de 5: ", cuadrado(5));



console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo1 = saludar("Edison");
let saludo2 = saludar("Edison", "Buenos dias");
console.log(saludo1);
console.log(saludo2);

/* funcion que determine si es par o no par un numero*/
function det(num){
    if(num%2 == 0){
        console.log("Es par");
    } else {
        console.log("No es par")
    }
}

let n1 = det(4);
let n2 = det(3);



function area(base, altura){
    return (base * altura)/2
}

let r1 = area(3,6);
let r2 = area(9,1);

console.log(r1);
console.log(r2);