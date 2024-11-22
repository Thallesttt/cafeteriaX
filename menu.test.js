const fctn = require("./menu.mjs");
test("Disponibilização de um menu de lanches", () => {
    let object = {name:"Lanches", itens:[{Id:1,Name:"Pão na chapa", Price:"2.20"}]};
    let result = fctn(object.name, object.itens);
expect(result).toEqual(`<ol name="Lanches"><li value="" class=""><span>Pão na chapa &nbsp; - R$2,20</span></li></ol>`);
});