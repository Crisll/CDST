var importe = parseInt(prompt("Indique el importe de la compra"));
console.log(importe);
var mes = prompt("Indique el mes actual");
console.log(mes);

if (mes=="octubre") {
    console.log(importe*0.85)
}
else if (mes=="Octubre") {
    console.log(importe*0.85)
}
else {
    console.log(importe)
}