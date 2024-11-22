/** Módulo usado nos testes*/
const fctn = require("./pedido.mjs");

test("Analisa pedidos e fornece um prazo de 20 minutos", () => { 
    expect(fctn([{item:"café", complexidade:5}, {item:"sandwich", complexidade:7}, {item:"sandwich", complexidade:7}, {item:"água", complexidade:1} ])).toBe(20);
});