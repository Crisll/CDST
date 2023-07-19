// Enero y febrero un 20%.
// Julio y agosto un 15%.
// Noviembre y diciembre un 25%.
// Resto de meses precio sin descuento.
var importe = parseInt(prompt("Indique el importe de la compra"));
var mes = prompt("Indique el mes actual");

switch (mes.toLowerCase()) {
    case "enero":
        document.write(importe*0.80);
        break;
    case "febrero":
        document.write(importe*0.80);
        break;
    case "julio":
        document.write(importe*0.85);
        break;
    case "agosto":
        document.write(importe*0.85);
        break;
    case "noviembre":
        document.write(importe*0.75);
        break;
    case "diciembre":
        document.write(importe*0.75)
        break;
    default:
        document.write("Pa ti no hay descuento, a pagar " + importe)
}