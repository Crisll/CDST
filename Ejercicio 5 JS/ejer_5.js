var importe = parseInt(prompt("Indique el importe de la compra"));
console.log(importe);
var mes = prompt("Indique el mes actual");
console.log(mes);
// Se puede usar mes.toLowerCase para que todo lo que introduzca el usuario a miniscula y evitar todo el tinglado.
if (mes.toLowerCase()=="octubre") {
    console.log(importe*0.85)
}
// else if (mes=="Octubre") {
//     console.log(importe*0.85)
// }
// else if (mes=="OCTUBRE") {
//     console.log(importe*0.85) 
// }
// else if (mes=="oCTUBRE") {
//     console.log(importe*0.85)
// }
else {
    console.log(importe)
}