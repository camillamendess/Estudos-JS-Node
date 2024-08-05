// Definindo um array de objetos representando pessoas
const pessoas = [
    { nome: "Maria", idade: 20 },
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 17 },
    { nome: "Pedro", idade: 30 }
];

// Inicializando variáveis para calcular a soma e o número de pessoas com idade maior que 18
let somaIdades = 0;
let contador = 0;

// Usando o método forEach para iterar sobre cada objeto do array
pessoas.forEach(function(pessoa) {
    // Verificando se a idade da pessoa é maior que 18
    if (pessoa.idade > 18) {
        // Se sim, adicionando a idade da pessoa à soma e incrementando o contador
        somaIdades += pessoa.idade;
        contador++;
    }
});

// Calculando a média de idade das pessoas com idade maior que 18
const mediaIdade = somaIdades / contador;

// Exibindo a média de idade no console
console.log("Média de idade das pessoas com mais de 18 anos:", mediaIdade);
