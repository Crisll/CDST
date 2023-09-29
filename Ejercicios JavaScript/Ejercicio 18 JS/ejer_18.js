function datitos() {
    var datos = [];
    var cod = document.getElementById("cod").value;
    var nya = document.getElementById("nya").value;
    var ed = document.getElementById("ed").value;
    var ce = document.getElementById("ce").value;
    var tlf = document.getElementById("tlf").value;
    var theme = document.getElementById("theme").value;
    datos.push(cod, nya, ed, ce, tlf, theme);
    console.log(datos);
    document.getElementById("mostrar").innerHTML = datos;
}
