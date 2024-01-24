function calcs() {  
    var calcs1 = parseInt(document.getElementById("calcs1").value);
    var calcs2 = parseInt(document.getElementById("calcs2").value);
    suma = calcs1 + calcs2;
    resta = calcs1 - calcs2;
    multiplica = calcs1 * calcs2;
    divide = calcs1 / calcs2;
    var csuma =  calcs1 + " + " + calcs2 + " = " + suma;
    var cresta =  calcs1 + " - " + calcs2 + " = " + resta;
    var cmultiplica = calcs1 + " x " + calcs2 + " = " + multiplica;
    var cdivide = calcs1 + " / " + calcs2 + " = " + divide.toFixed(2);

    document.getElementById("calcs").innerHTML= csuma + " | " + cresta + "<br>" + cmultiplica + " | " + cdivide;
}   

function comparar() {
var compara1 = parseInt(document.getElementById("compara1").value);
var compara2 = parseInt(document.getElementById("compara2").value);


if (compara1>compara2) { 
    document.getElementById("compara").innerHTML= compara1 + " es mayor que " + compara2;
}
else  if (compara1==compara2) {
    document.getElementById("compara").innerHTML= compara1 + " es igual que " + compara2;
}
else {
    document.getElementById("compara").innerHTML= compara1 + " es menor que " + compara2;
}
}

function infantes() {
    var infante1 = parseInt(document.getElementById("infant1").value);
    var infante2 = parseInt(document.getElementById("infant2").value);
    var niño = (infante1*100)/(infante1+infante2);
    var niña = (infante2*100)/(infante1+infante2);
    var mniño = niño - niña;
    var mniña = niña - niño;
if (mniño>mniña) {
    document.getElementById("infant").innerHTML= niño.toFixed(2) +"% niños <br>"+ niña.toFixed(2) +"% niñas. <br>"+"Debes matar un "+ mniño.toFixed(2) +"% de niños para igualarlo";
}
else if (mniño==mniña) {
    document.getElementById("infant").innerHTML= niño.toFixed(2) +"% niños <br>"+ niña.toFixed(2) +"% niñas. <br>"+"No hace falta matar para igualarlo";
}
else {
    document.getElementById("infant").innerHTML= niño.toFixed(2) +"% niños <br>"+ niña.toFixed(2) +"% niñas. <br>"+"Debes matar un "+ mniña.toFixed(2) +"% de niñas para igualarlo.";
}
}

function minicompra() {
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

function contra() {
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

function tablas(){
var num = Number(prompt("Indique el número para multiplicar en tablas de 10"))
var mult = 1;
var numax = 10
while (mult <=10) {
    document.write(num*mult + "<br/>");
    mult++;
}
for(var tabl=1; tabl<=numax; tabl++){
    for(var mult=1; mult<=10; mult++){
        document.write(tabl*mult + "<br/>");  
    }
}
for(var tabla=1; tabla<=num; tabla++){
    for(var mult=1; mult<=10; mult++){
        document.write(tabla*mult + "<br/>");  
    }
}
}

function compra(){
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
}

function contraseña() {
    var user = (prompt("Indique su nombre de usuario")); 
    if (user=="Admin") {
        var contraseña = prompt("Ingrese ahora su contraseña");
        if (contraseña=="Webmaster") {
            document.write("¡Bienvenido!")
        }
        else if (contraseña==null) {
            alert("Cancelado");
        }
        else {
            document.write ("Incorrecta");
        }
    }
    else if (user==null) {
        alert("Cancelado");
    }
    else {
        document.write ("Incorrecto");
    }
}

function joker() {
    var a = eval(prompt("Progama lo que te de la gana"));
    document.write(a);
}