for (let i=1; i <=10; i++){
    console.log("numero", i);
}

suma = 0;
for (let i=1; i <=10; i++){
    suma += i;
}

console.log("sumatoria indices", suma);

for (let i=1; i <=10; i++){
    m = 4 * i;
    console.log("4 * ", i , " = ", m);
}


nombre = "edison";
for (let i=0; i <nombre.length; i++){
    console.log(nombre[i]);
}


numero = 3
for (let i=1; i <= 10; i++){
    exponente = numero ** i
    console.log(exponente);
}



console.log("Bucle while");
let i = 1;
while(i<=6){
    console.log("indice", i)
    i++;
}

let miArreglo=[-2,3,1,2,3];
let indice = 1;
while(indice<miArreglo.length){
    console.log("valor", indice, "es", miArreglo[indice]);
    indice++;
}


numero=1;
while(numero<=10){
    if(numero%2 == 0){
        console.log(numero)
    }
    numero++;
}


let x = 5;
do {
    console.log("x es: ", x);
    x--;
}while (x!=0);



let r = 1;

do{
    n = 5 * r
    console.log("5 * ",r , " = ", n)
    r++;
}while(r<=10);



num = [1,2,3,4,5];
w =0;
mayor=0;
while(w<num.length){  
    if(num[w]>mayor){
        mayor=num[w];
    }
    w++;
} 
console.log(mayor);



