for (var i = 3; i > 0; i--) {
    var validar = Number(prompt("Escribe la contraseña"));
        if (validar==123456) {
            document.write("Has entrado en la bóveda");
            break;
    }
        else if (i == 3) {
            alert("Contraseña incorrecta. Tienes dos intentos más");
    }
        else if (i == 2) {
            alert("Contraseña incorrecta. Tienes solo un intento");
    }
        else {
            document.write ("Intruso detectado. Iniciando protocolo: M4T4RT3")
    }
}