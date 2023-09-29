// Ejercicio 2
function valor() {
var ValorA = 13;
console.log(ValorA);
var ValorB = 5;
console.log(ValorB);
var ValorC = ValorA;
const D = "2023"
ValorA = ValorB;
ValorB = ValorC;
console.log("A vale " + ValorA + " y B vale " + ValorB);
console.log("D vale " + D);
}
valor();
// Ejercicio 3
function comparacion() {
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
}
comparacion();
// Ejercicio 4
function infantes() {
var m = parseInt(prompt("Introduce el número de niños"));
console.log(m);
var f = parseInt(prompt("Introduce el número de niñas"));
console.log(f);
var a = (m*100)/(m+f);
var b = (f*100)/(m+f);
console.log(a+"%\n"+b+"%");
}
infantes();
// Ejercicio 5
function compra() {
var importe = parseInt(prompt("Indique el importe de la compra"));
console.log(importe);
var mes = prompt("Indique el mes actual");
console.log(mes);
if (mes.toLowerCase()=="octubre") {
    console.log(importe*0.85)
}
else {
    console.log(importe)
}
}
compra ();
// Ejercicio 6
function boveda() {
for (var i = 3; i > 0; i--) {
    var validar = Number(prompt("Escribe la contraseña"));
        if (validar==123456) {
            document.write("Has entrado en la bóveda");
            break;
    }
        else if (i == 3) {
            alert("Contraseña incorrecta. Tienes dos intentos más");
    }
        else if (i == 2) {
            alert("Contraseña incorrecta. Tienes solo un intento");
    }
        else {
            document.write ("Intruso detectado. Iniciando protocolo: M4T4RT3")
    }
}
}
boveda ();