    var user = (prompt("Indique su nombre de usuario")); 
    if (user=="Admin") {
        var contraseña = prompt("Ingrese ahora su contraseña");
        if (contraseña=="Webmaster") {
            document.write("¡Bienvenido!")
        }
        else if (contraseña==null) {
            alert("Cancelado");
        }
        else {
            document.write ("Incorrecta");
        }
    }
    else if (user==null) {
        alert("Cancelado");
    }
    else {
        document.write ("Incorrecto");
    }