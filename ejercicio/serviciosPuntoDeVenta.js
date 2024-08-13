function calcularValorDescuento(monto, porcentajeDescuento) {
    return (monto * porcentajeDescuento) / 100;
}

function calcularIVA(monto, porcentajeIVA) {
    return (monto * porcentajeIVA) / 100;
}

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularTotal(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}
