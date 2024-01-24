function recuento() {
    let texto = document.getElementById("txt").value.split(" ");
    let numax = "Hay " + texto.length + " palabras.";
    document.write(numax + "<br>");
    let ppalabra = [texto[0]];
    document.write("La primera palabra es " + "'" + ppalabra + "'" + "<br>");
    let upalabra = texto[texto.length-1];
    document.write("La última palabra es " + "'" + upalabra + "'");
    for ( i = 0; i < texto.length; i++) {
        document.write( "<br>" + texto[i]);
    }
}