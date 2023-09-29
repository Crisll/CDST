// InicioProceso
// Escribir &quot;Introduce el primer número&quot;
// Leer numero1
// Escribir &quot;Introduce el segundo número&quot;
// Leer numero2
// //comparamos los dos números,
// //si el primero es mayor o igual que el segundo entra
// Si (numero1&gt;=numero2) Entonces
// //Si el numero1 y numero2 son iguales entra y escribe que son iguales
// //Sino lo son escribe que el numero1 es el mayor
// Si (numero1=numero2) Entonces
// escribir &quot;los números &quot; numero1 &quot; &quot; numero2 &quot; son iguales&quot;
// Sino
// Escribir numero1 &quot; es el mayor de los dos&quot;
// FinSi
// //Si el primer Si es falso, escribe que el numero2 es mayor
// Sino
// Escribir numero2 &quot; es el mayor de los dos&quot;
// Fin Si
// FinProceso

var a = parseInt(prompt("Introduce el primer número"));
console.log(a);
var b = parseInt(prompt("Introduce el segundo número"));
console.log(b);

if (a>b) { 
    console.log("A es mayor que B");
}
else  if (a==b) {
    console.log("A es igual que B");
}
else {
    console.log("A es menor que B");
}

