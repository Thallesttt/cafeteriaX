/**Preciso verificar passar o tempo estimado de um pedido conforme número de itens e complexidade.  
Version1
@param {Object[]} pedido Pedido proposto ao balcão com X número de itens 
@param {int} pedido[].complexidade Tempo em números para contagem de complexidade de execução
@param {string} pedido[].item Descrição do item selecionado
*/
function analisaPedido(pedido) {
     var retorno = 0;
    for (let iterator = 0; iterator<pedido.length;iterator++){ 
        retorno += pedido[iterator].complexidade;
    }
    return retorno;
}
module.exports = analisaPedido;



