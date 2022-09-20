import PromptSync = require('prompt-sync');
const  prompt = PromptSync();

class client {
    private nome: string;
    private cpf: number;
    private genero: string;
    private idade: number;
 
    constructor (nome: string,cpf: number,genero: string,idade: number){
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero;
        this.idade = idade;
    }
}
const nome = prompt('Digite o nome do cliente: ');
const cpf = prompt('Digite o CPF do cliente: ');
const genero = prompt('Digite o gênero do cliente: ');
const idade = prompt('Digite a idade do cliente: ');

const cliente = new client(nome, cpf, genero, idade);

console.log(`nome do clinte: ${nome}`);
console.log(`CPF do clinte: ${cpf}`);
console.log(`gênero do clinte: ${genero}`);
console.log(`Idade do clinte: ${idade}`);
