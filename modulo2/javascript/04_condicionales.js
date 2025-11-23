let temperatura = 35;

if(temperatura>30){
    console.log("Hace calor");
}



let password ="pass123";
if(password==="passs12345"){
    console.log("Usuario logueado");
} else {
    console.log("Acceso denegado");
}


let nota = 7 ;
if(nota>=9){
    console.log("Sobresaliente");
} else if (nota>=6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}




let edad = 20;
let tienen_licencia = true ;
if(edad>=18){
    if(tienen_licencia){
        console.log("Puede conducir");
    } else {
        console.log("Necesita Licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}



// swtich
let dia = "lunes";

switch(dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("ultimo dia laboral");
        break;
    default:
        console.log("Dia Normal");
}

let n1 = 11;
let n2 = 7;
let n3 = 3;

if (n1 > n2 && n1 > n3){
    console.log("n1 es mayor")
}else if (n2 > n1 && n2 > n3) {
    console.log("n2 es mayor")
} else {
     console.log("n3 es mayor")
}

let a = prompt("Incluye el primer numero");
let b = prompt("Incluye el segundo numero");
let c = prompt("Incluye el tercer numero");