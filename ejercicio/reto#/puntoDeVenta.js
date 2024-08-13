function calcular() {
    let monto = parseFloat(recuperarTexto("txtMonto"));
    let porcentajeDescuento = parseFloat(recuperarTexto("txtDescuento"));
    let porcentajeIVA = parseFloat(recuperarTexto("txtIVA"));
    let precioUnitario = parseFloat(recuperarTexto("txtPrecioUnitario"));
    let cantidad = parseInt(recuperarTexto("txtCantidad"), 10);

    let descuento = calcularValorDescuento(monto, porcentajeDescuento);
    let iva = calcularIVA(monto, porcentajeIVA);
    let subtotal = calcularSubtotal(precioUnitario, cantidad);
    let total = calcularTotal(subtotal, descuento, iva);

    mostrarTexto("lblSubtotal", subtotal.toFixed(2));
    mostrarTexto("lblDescuento", descuento.toFixed(2));
    mostrarTexto("lblIVA", iva.toFixed(2));
    mostrarTexto("lblTotal", total.toFixed(2));
}
