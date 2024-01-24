function cliqui() {
    document.querySelector(".ccolor1").style.backgroundColor = "red";
    document.getElementById("mostrar1").innerHTML = "Función no disponible";
}
function cliqui2() {
    document.querySelector(".ccolor2").style.backgroundColor = "red";
    document.querySelector("#mostrar2").innerHTML = "Función no disponible";
}

function recoger() {
    var datos=[];

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    datos.push(nombre, email, asunto, mensaje)

    localStorage.setItem("Mensajes", "Lista");
    localStorage.setItem(datos, JSON.stringify(datos));
}