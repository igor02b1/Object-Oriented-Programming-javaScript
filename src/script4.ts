import PromptSync = require('prompt-sync');
const  prompt = PromptSync();

class Funcionario {
    private nome: string;
    private idade: number;
    private salario: number;
    private tempoDeEmpresa: number;

    constructor(nome: string,idade: number, salario: number, tempoDeEmpresa: number){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.tempoDeEmpresa = tempoDeEmpresa;
    }
}
const nome = prompt('Nome do funcionário: ');
const idade = Number(prompt('Idade do funcionário: '));
const salario = Number(prompt('Salário do funcionario: '));
const tempoDeEmpresa = Number(prompt('Tempo de empresa: '));

const funcionario = new Funcionario(nome, idade, salario, tempoDeEmpresa);

console.log(`Nome do funcionário: ${nome}`);
console.log(`Idade do funcionário: ${idade}`);
console.log(`O funcionário recebe um salário de R$ ${salario}`);
console.log(`Tempo de empresa: ${tempoDeEmpresa}`);
