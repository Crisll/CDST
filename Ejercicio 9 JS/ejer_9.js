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
