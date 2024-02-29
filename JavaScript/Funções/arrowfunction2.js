// Definindo um array de objetos representando pessoas
const pessoas = [
    { nome: "Maria", idade: 30 },
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 35 },
    { nome: "Pedro", idade: 40 }
];

// Exemplo 1: Arrow function simples para calcular a média de idade
const calcularMediaIdade = pessoas => {
    const totalIdades = pessoas.reduce((total, pessoa) => total + pessoa.idade, 0);
    return totalIdades / pessoas.length;
};

console.log("Média de idade (Exemplo 1):", calcularMediaIdade(pessoas));

// Exemplo 2: Arrow function sem chaves, com uma única linha de retorno
const calcularMediaIdade2 = pessoas => pessoas.reduce((total, pessoa) => total + pessoa.idade, 0) / pessoas.length;

console.log("Média de idade (Exemplo 2):", calcularMediaIdade2(pessoas));

// Exemplo 3: Arrow function com desestruturação de parâmetro
const calcularMediaIdade3 = ({ idade }) => idade;

console.log("Idade da primeira pessoa (Exemplo 3):", calcularMediaIdade3(pessoas[0]));

// Exemplo 4: Arrow function em método de objeto
const objeto = {
    dados: pessoas,
    calcularMediaIdade() {
        return this.dados.reduce((total, pessoa) => total + pessoa.idade, 0) / this.dados.length;
    }
};

console.log("Média de idade (Exemplo 4):", objeto.calcularMediaIdade());
