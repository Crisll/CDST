$(document).ready(function () {
var accesibilidad = $("#accesibilidad")
    accesibilidad
        .css("display" , "none")
        });
function mostraracbly() {
    document.querySelector("#accesibilidad").style.display = "block"
    }
function ocultaracbly() {
    document.querySelector("#accesibilidad").style.display = "none"
    }
function textoG() {
    document.querySelector("body").style.fontSize = "2em"
    document.querySelector("#accesibilidad").style.fontSize = "1em"
    document.querySelector("#accesibilidad").style.transform = "translate(0em, 6.5em)";
    document.querySelector("#acblyTT").style.display = "none";
    document.querySelector("#acblyTT2").style.display = "block";
    }
function textoN() {
    document.querySelector("body").style.fontSize = "1em"
    document.querySelector("#accesibilidad").style.fontSize = "1em"
    document.querySelector("#accesibilidad").style.transform = "translate(0em, 32em)"
    document.querySelector("#acblyTT").style.display = "block";
    document.querySelector("#acblyTT2").style.display = "none";
    }
function altoC() {
    document.querySelector("#acblyAC").style.display = "none";
    document.querySelector("#acblyAC2").style.display = "block";
    document.querySelector("header").style.backgroundColor = "#292929";
    document.querySelector("#principal").style.backgroundColor = "#292929";
    document.querySelector("#seccion2").style.backgroundColor = "#292929";
    document.querySelector("#seccion3").style.backgroundColor = "#292929";
    document.querySelector("#seccion4").style.backgroundColor = "#292929";
    document.querySelector("body").style.backgroundColor = "#393939";
    document.querySelector("body").style.color = "white";
    document.querySelector("#principal").style.color = "black";
    document.querySelector("#accesibilidad").style.color = "black";
    $("a").css("color", "white");
    }
function normalC() {
    document.querySelector("#acblyAC").style.display = "block";
    document.querySelector("#acblyAC2").style.display = "none";
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("#principal").style.backgroundColor = "white";
    document.querySelector("#seccion2").style.backgroundColor = "white";
    document.querySelector("#seccion3").style.backgroundColor = "#00676c";
    document.querySelector("#seccion4").style.backgroundColor = "#cbdbeb";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("#principal").style.color = "black";
    document.querySelector("#accesibilidad").style.color = "black";
    $("a").css("color", "black");
    }
function DV() {
    document.querySelector("#acblyTT").style.display = "none";
    document.querySelector("#acblyTT2").style.display = "block";
    document.querySelector("#acblyAC").style.display = "none";
    document.querySelector("#acblyAC2").style.display = "block";
    document.querySelector("#acblyDV").style.display = "none";
    document.querySelector("#acblyDV2").style.display = "block";
    document.querySelector("body").style.fontSize = "2em"
    document.querySelector("#accesibilidad").style.fontSize = "1em"
    document.querySelector("#accesibilidad").style.transform = "translate(0em, 6.5em)";
    document.querySelector("header").style.backgroundColor = "#292929";
    document.querySelector("#principal").style.backgroundColor = "#292929";
    document.querySelector("#seccion2").style.backgroundColor = "#292929";
    document.querySelector("#seccion3").style.backgroundColor = "#292929";
    document.querySelector("#seccion4").style.backgroundColor = "#292929";
    document.querySelector("body").style.backgroundColor = "#393939";
    document.querySelector("body").style.color = "white";
    document.querySelector("#principal").style.color = "black";
    document.querySelector("#accesibilidad").style.color = "black";
    $("a").css("color", "white");
}
function DV2() {
    document.querySelector("#acblyTT").style.display = "block";
    document.querySelector("#acblyTT2").style.display = "none";
    document.querySelector("#acblyAC").style.display = "block";
    document.querySelector("#acblyAC2").style.display = "none";
    document.querySelector("#acblyDV").style.display = "block";
    document.querySelector("#acblyDV2").style.display = "none";
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("#principal").style.backgroundColor = "white";
    document.querySelector("#seccion2").style.backgroundColor = "white";
    document.querySelector("#seccion3").style.backgroundColor = "#00676c";
    document.querySelector("#seccion4").style.backgroundColor = "#cbdbeb";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("#principal").style.color = "black";
    document.querySelector("#accesibilidad").style.color = "black";
    $("a").css("color", "black");
    document.querySelector("body").style.fontSize = "1em"
    document.querySelector("#accesibilidad").style.fontSize = "1em"
    document.querySelector("#accesibilidad").style.transform = "translate(0em, 32em)"
}