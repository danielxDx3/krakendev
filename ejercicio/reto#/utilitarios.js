function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    return componente ? componente.value : "";
}

function mostrarTexto(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    if (componente) {
        componente.innerText = mensaje;
    }
}
