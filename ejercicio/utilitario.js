recuperarTexto = function(idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja, 10);
    return valorEntero;
}

recuperarFloat = function(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

mostrarTexto = function(idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostrarImagen = function(idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTextoEnCaja = function(idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    if (componente) {
        componente.value = mensaje;
    } else {
        console.error("No se encontró el componente con id:", idComponente);
    }
}

saludar = function() {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Edad:", edad);
    console.log("Estatura:", estatura);

    mostrarTexto("lblResultado", mensajeBienvenida);

    mostrarImagen("imgSaludo", "./imagenes/yakuza.gif");
    mostrarTextoEnCaja("txtNombre", "");  // Corregido el ID
}
