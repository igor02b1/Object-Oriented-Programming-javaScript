import PromptSync = require('prompt-sync');
const  prompt = PromptSync();

class Eletronico {
    private produtoNome: string;
    private preco: number;
    private voltagem: number;
    private marca: string;

    constructor(produtoNome: string, preco: number, voltagem: number, marca: string){
        this.produtoNome = produtoNome;
        this.preco = preco;
        this.voltagem = voltagem;
        this.marca = marca;
    }
}
const produtoNome = prompt('Nome do produto: ');
const preco = Number(prompt('Preço do produto: '));
const voltagem = Number(prompt('Voltagem do produto: '));
const marca = prompt('Marca do produto: ');

const eletronico = new Eletronico(produtoNome, preco, voltagem, marca);

console.log(`Nome do produto: ${produtoNome}`);
console.log(`O produto custa: R$ ${preco}`);
console.log(`A voltagem do produto é: ${voltagem}(V)`);
console.log(`O produto é da Marca: ${marca}`);