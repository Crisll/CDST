function cambio() {
    document.getElementById('title').style.backgroundImage = "url(imagenes/test2.jpg)";
    document.getElementById('titleh1').style.opacity = 100;
}

function calcs() {  
    let calcs1 = parseInt(document.getElementById("calcs1").value);
    let calcs2 = parseInt(document.getElementById("calcs2").value);
    suma = calcs1 + calcs2;
    resta = calcs1 - calcs2;
    multiplica = calcs1 * calcs2;
    divide = calcs1 / calcs2;
    let csuma =  calcs1 + " + " + calcs2 + " = " + suma;
    let cresta =  calcs1 + " - " + calcs2 + " = " + resta;
    let cmultiplica = calcs1 + " x " + calcs2 + " = " + multiplica;
    let cdivide = calcs1 + " / " + calcs2 + " = " + divide.toFixed(2);

    document.getElementById("calcs").innerHTML= csuma + " | " + cresta + "<br>" + cmultiplica + " | " + cdivide;
}   

function comparar() {
let compara1 = parseInt(document.getElementById("compara1").value);
let compara2 = parseInt(document.getElementById("compara2").value);


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
    document.getElementById('title').style.backgroundImage = "url(imagenes/infantes.jpg)";
    document.getElementById('titleh1').style.opacity = 0;
    let infante1 = parseInt(document.getElementById("infant1").value);
    let infante2 = parseInt(document.getElementById("infant2").value);
    let niño = (infante1*100)/(infante1+infante2);
    let niña = (infante2*100)/(infante1+infante2);
    let mniño = niño - niña;
    let mniña = niña - niño;
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
document.getElementById('title').style.backgroundImage = "url(imagenes/mercadona.png)";
document.getElementById('titleh1').style.opacity = 0;
let importe = document.getElementById("mercadona1").value;
let mes = document.getElementById("mercadona2").value;

if (mes.toLowerCase()=="octubre") {
    document.getElementById("mercadona").innerHTML= "Tienes un descuento del 15% con lo cual pagarás "+ (importe * 0.85).toFixed(2) + "€"
}
else {
    document.getElementById("mercadona").innerHTML= "Pa ti no hay descuento. A pagar "+ importe + "€"
}
}




function contra() {
    for (var i = 3; i > 0; i--) {
        let validar = Number(prompt("Escribe la contraseña"));
            if (validar==123456) {
                document.getElementById("contra").innerHTML= "Has entrado en la bóveda";
                document.getElementById("contra").style.color = "green"
                break;
        }
            else if (i == 3) {
                alert("Contraseña incorrecta. Tienes dos intentos más");
        }
            else if (i == 2) {
                alert("Contraseña incorrecta. Tienes solo un intento");
        }
            else {
                document.getElementById("contra").innerHTML= "Intruso detectado. Iniciando protocolo: M4T4RT3"
                document.getElementById("contra").style.color = "red"
        }
    }
}

function tablas(){
let num = Number(prompt("Indique el número para multiplicar en tablas de 10"));
var mult = 1;
let numax = 10;
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
    document.getElementById('title').style.backgroundImage = "url(imagenes/fruteria.jpg)";
    document.getElementById('titleh1').style.opacity = 0;
    let importe = document.getElementById("fruteria1").value;
    let mes = document.getElementById("fruteria2").value;
    
    switch (mes.toLowerCase()) {
        case "enero":
            document.getElementById("fruteria").innerHTML= "Tienes un descuento del 20% con lo cual pagarás "+ (importe * 0.80).toFixed(2) + "€"
            break;
        case "febrero":
            document.getElementById("fruteria").innerHTML= "Tienes un descuento del 20% con lo cual pagarás "+ (importe * 0.80).toFixed(2) + "€"
            break;
        case "julio":
            document.getElementById("fruteria").innerHTML= "Tienes un descuento del 15% con lo cual pagarás "+ (importe * 0.85).toFixed(2) + "€"
            break;
        case "agosto":
            document.getElementById("fruteria").innerHTML= "Tienes un descuento del 15% con lo cual pagarás "+ (importe * 0.85).toFixed(2) + "€"
            break;
        case "noviembre":
            document.getElementById("fruteria").innerHTML= "Tienes un descuento del 25% con lo cual pagarás "+ (importe * 0.75).toFixed(2) + "€"
            break;
        case "diciembre":
            document.getElementById("fruteria").innerHTML= "Tienes un descuento del 25% con lo cual pagarás "+ (importe * 0.75).toFixed(2) + "€"
            break;
        default:
            document.getElementById("fruteria").innerHTML= "Bienvenido a la frutería. Mala suerte, este mes no hay oferta, tienes que pagar " + importe + "€"
    }
}

function contraseña() {
    let user = (prompt("Indique su nombre de usuario")); 
    if (user=="Admin") {
        var contraseña = prompt("Ingrese ahora su contraseña");
        document.getElementById("contraseña").style.color = "green"
        if (contraseña=="Webmaster") {
        document.getElementById("contraseña").innerHTML="¡Bienvenido!"
        }
        else if (contraseña==null) {
            alert("Cancelado");
        }
        else {
            document.getElementById("contraseña").innerHTML="Incorrecta"
            document.getElementById("contraseña").style.color = "red"
        }
    }
    else if (user==null) {
        alert("Cancelado");
    }
    else {
        document.getElementById("contraseña").innerHTML="Incorrecto"
        document.getElementById("contraseña").style.color = "darkorange"
    }
}

function joker() {
    var a = eval(prompt("Progama lo que te de la gana"));
    document.getElementById("joker").innerHTML = a
}