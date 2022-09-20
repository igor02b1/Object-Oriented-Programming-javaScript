"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Eletronico = /** @class */ (function () {
    function Eletronico(produtoNome, preco, voltagem, marca) {
        this.produtoNome = produtoNome;
        this.preco = preco;
        this.voltagem = voltagem;
        this.marca = marca;
    }
    return Eletronico;
}());
var produtoNome = prompt('Nome do produto: ');
var preco = Number(prompt('Preço do produto: '));
var voltagem = Number(prompt('Voltagem do produto: '));
var marca = prompt('Marca do produto: ');
var eletronico = new Eletronico(produtoNome, preco, voltagem, marca);
console.log("Nome do produto: ".concat(produtoNome));
console.log("O produto custa: R$ ".concat(preco));
console.log("A voltagem do produto \u00E9: ".concat(voltagem, "(V)"));
console.log("O produto \u00E9 da Marca: ".concat(marca));
