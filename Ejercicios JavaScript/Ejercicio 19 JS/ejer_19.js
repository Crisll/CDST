i=0;
var datos = [];
function datitos() {

        var contador = 0;
        var datito = [];
        for (var j=0; j<=datito.length;j++) {

            if (contador == 0) {
                datito[j] = document.getElementById("cod").value;
            }
            else if (contador == 1) {
                datito[j] = document.getElementById("nya").value;
            }
            else if (contador == 2) {
                datito[j] = document.getElementById("ed").value;
            }
            else if (contador == 3) {
                datito[j] = document.getElementById("ce").value;
            }
            else if (contador == 4) {
                datito[j] = document.getElementById("tlf").value;
            }
            else if (contador == 5) {
                datito[j] = document.getElementById("theme").value;
                contador= 0;
                break;
            }
            contador++;
        }
        datos[i] = datito;
        i++;
    document.getElementById("mostrar").innerHTML = datos;
    }
