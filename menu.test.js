const fctn = require("./menu.js");
test("Disponibilização de um menu de lanches", () => {
    let object = {name:"Lanches", itens:[{Id:1,Name:"Pão na chapa", Price:"2.20"}]};
expect(fctn(object.name, object.itens)).toEqual("<ol name='Lanches'><li class=''><span>Pão na chapa &nbsp; - R$2,20</span></li></ol>");
});