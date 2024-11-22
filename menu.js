/**
 * @param {string} tituloCatalogo título do catálogo necessário para visualização do cliente
 * */
function geraMenu(tituloCatalogo, itens) {   
    let htmlDisplay = "";
    if(tituloCatalogo) {
        htmlDisplay = `<ol name="${tituloCatalogo}">`;
        for(let iterator = 0; iterator < itens.length; iterator++) {
            const {Name, Price} = itens[iterator];
            let item = `<li value = class=''> <span>${Name} &nbsp; - R$${Price.replace(".",",")}</span></li>`;
            htmlDisplay += item;    
        }
        htmlDisplay += "</ol>";
    }
    return htmlDisplay;
}
module.exports = geraMenu;