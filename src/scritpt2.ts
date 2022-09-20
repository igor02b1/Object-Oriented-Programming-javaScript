import PromptSync = require('prompt-sync');
const  prompt = PromptSync();

class Aviao {
    private modelo: string;
    private velocidade: number;
    private cor: string;
    private peso: number;

    constructor(modelo: string,velocidade: number, cor: string,peso: number){
        this.modelo = modelo;
        this.velocidade = velocidade;
        this.cor = cor;
        this.peso = peso;
    }
}

const modelo = prompt('Modelo do Avião: ');
const velocidade = prompt('Velocidade do Avião: ');
const cor = prompt('Cor do Avião: ');
const peso = prompt('Peso do Avião: ');

const aviao = new Aviao (modelo, velocidade, cor, peso);

console.log(`Modelo do avião: ${modelo}`);
console.log(`velocidade do avião: ${velocidade} KM/h`);
console.log(`Cor do avião: ${cor}`);
console.log(`Peso do avião: ${peso} KG`);

