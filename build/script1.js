"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var client = /** @class */ (function () {
    function client(nome, cpf, genero, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero;
        this.idade = idade;
    }
    return client;
}());
var nome = prompt('Digite o nome do cliente: ');
var cpf = prompt('Digite o CPF do cliente: ');
var genero = prompt('Digite o gênero do cliente: ');
var idade = prompt('Digite a idade do cliente: ');
var cliente = new client(nome, cpf, genero, idade);
console.log("nome do clinte: ".concat(nome));
console.log("CPF do clinte: ".concat(cpf));
console.log("g\u00EAnero do clinte: ".concat(genero));
console.log("Idade do clinte: ".concat(idade));
