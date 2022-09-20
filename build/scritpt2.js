"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Aviao = /** @class */ (function () {
    function Aviao(modelo, velocidade, cor, peso) {
        this.modelo = modelo;
        this.velocidade = velocidade;
        this.cor = cor;
        this.peso = peso;
    }
    return Aviao;
}());
var modelo = prompt('Modelo do Avião: ');
var velocidade = prompt('Velocidade do Avião: ');
var cor = prompt('Cor do Avião: ');
var peso = prompt('Peso do Avião: ');
var aviao = new Aviao(modelo, velocidade, cor, peso);
console.log("Modelo do avi\u00E3o: ".concat(modelo));
console.log("velocidade do avi\u00E3o: ".concat(velocidade, " KM/h"));
console.log("Cor do avi\u00E3o: ".concat(cor));
console.log("Peso do avi\u00E3o: ".concat(peso, " KG"));
