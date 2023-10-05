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

function inicio() {
    document.querySelector(".main").style.backgroundImage = "url(imagenes/imagen-fondo.png";
    document.getElementById("imagencursoprincipal").src = "imagenes/imagen-curso.jpg";
    document.getElementById("main").innerHTML = `<h1>Descubre tu próximo futuro</h1>
    <div class="textimagen">
        <p><b>Forja con nosotros tu destino.</b></p>
    </div>
    <button><a href="contacto.html">Información</a></button>`
}
function curso() {
    document.querySelector(".main").style.backgroundImage = "url(imagenes/imagen-fondo2.jpg";
    document.getElementById("imagencursoprincipal").src = "imagenes/curso-cocina.jpg";
    document.getElementById("main").innerHTML = `<video src="imagenes/VideoClase.mp4" autoplay loop></video>
    <div class="textimagen">
        <p><b>Curso de Confección de Páginas Web</b></p>`;
}
function contacto() {
    document.querySelector(".main").style.backgroundImage = "url(imagenes/imagen-fondo3.jpg";
    document.getElementById("imagencursoprincipal").src = "imagenes/imagen-curso.jpg";
    document.getElementById("main").innerHTML = `<h2>Contacta con nosotros</h2>
    <form action="">
        <input type="text" placeholder="Nombre" id="nombre">
        <input type="email" placeholder="Correo electrónico" id="email">
        <input type="text" placeholder="Asunto" id="asunto">
        <textarea name="" id="mensaje" cols="30" rows="10" placeholder="Escribe aquí tu mensaje..."></textarea>
        <button onclick="recoger()">Enviar</button>

    </form>
        <hr>
        <p id="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo soluta consequuntur, molestiae odit temporibus doloribus! Delectus assumenda atque nulla vero eligendi, quos, esse, optio quisquam magnam officia sit velit.Tempora aliquid est distinctio autem eligendi. Molestiae nostrum nobis vel obcaecati deserunt quod vero minus quo officiis omnis, reprehenderit fugit libero enim porro modi tenetur accusantium praesentium dolorum consectetur. Excepturi!</p>`
}

function popapp() {
    document.querySelector(".popapp").style.visibility = "visible";
    document.querySelector(".popapp2").style.transform = "translate(-12.5%,-4%)";
    document.querySelector("body").style.backgroundColor = "black";

}
function nopopapp() {
    document.querySelector(".popapp").style.visibility = "hidden";
    document.querySelector(".popapp2").style.transform = "translate(-12%,4%)"
}