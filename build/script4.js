"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, salario, tempoDeEmpresa) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.tempoDeEmpresa = tempoDeEmpresa;
    }
    return Funcionario;
}());
var nome = prompt('Nome do funcionário: ');
var idade = Number(prompt('Idade do funcionário: '));
var salario = Number(prompt('Salário do funcionario: '));
var tempoDeEmpresa = Number(prompt('Tempo de empresa: '));
var funcionario = new Funcionario(nome, idade, salario, tempoDeEmpresa);
console.log("Nome do funcion\u00E1rio: ".concat(nome));
console.log("Idade do funcion\u00E1rio: ".concat(idade));
console.log("O funcion\u00E1rio recebe um sal\u00E1rio de R$ ".concat(salario));
console.log("Tempo de empresa: ".concat(tempoDeEmpresa));
