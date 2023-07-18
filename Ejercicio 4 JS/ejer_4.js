// InicioProceso
// Escribir &quot;Introduce el numero de niños&quot;
// Leer numero_niños
// Escribir &quot;Introduce el numero de niñas&quot;
// Leer numero_niñas
// //calculamos el porcentaje
// porcentaje_niños&lt;-numero_niños*100/(numero_niños+numero_niñas)
// porcentaje_niñas&lt;-100-porcentaje_niños
// Escribir &quot;Hay un &quot; porcentaje_niños &quot; % de niños
// Escribir &quot;Hay un &quot; porcentaje_niñas &quot; % de niñas&quot;
// FinProceso

var m = parseInt(prompt("Introduce el número de niños"));
console.log(m);
var f = parseInt(prompt("Introduce el número de niñas"));
console.log(f);

var a = (m*100)/(m+f);
var b = (f*100)/(m+f);
console.log(a+"%\n"+b+"%");