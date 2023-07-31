function datos() {
    let nom = document.getElementById("nom").value;
    let ape = document.getElementById("ape").value;
    let ed = document.getElementById("ed").value;
    document.getElementById("fil1").innerHTML = "Nombre: " + nom;
    document.getElementById("fil2").innerHTML = "Apellidos: " + ape;
    document.getElementById("fil3").innerHTML = "Edad: " + ed;
    if (nom == "") {
        document.getElementById("dat1").innerHTML = "Nombre inválido";
        document.getElementById("dat1").style.color = "red"
    }
    else {
        document.getElementById("dat1").innerHTML = "Nombre válido";
        document.getElementById("dat1").style.color = "green"
    }
    if (ape == "") {
        document.getElementById("dat2").innerHTML = "Apellidos inválidos";
        document.getElementById("dat2").style.color = "red"
    }
    else {
        document.getElementById("dat2").innerHTML = "Apellido válido";
        document.getElementById("dat2").style.color = "green"
    }
    if (ed == "") {
        document.getElementById("dat3").innerHTML = "Edad inválida";
        document.getElementById("dat3").style.color = "red"
    }
    else {
        document.getElementById("dat3").innerHTML = "Edad válida";
        document.getElementById("dat3").style.color = "green"
    }
    if (nom != "" && ape !="" && ed !="") {
        document.querySelector(".filled").style.display = "block";
    }
    else {
        document.querySelector(".filled").style.display = "none";
    }
}
