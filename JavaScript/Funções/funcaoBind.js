// O método bind() cria uma nova função que, quando chamada, tem seu this definido para um valor específico.

// Definindo uma função que exibe uma mensagem de boas-vindas
function boasVindas(genero, cidade) {
    console.log(`Bem-vind${genero === 'M' ? 'o' : 'a'} a ${cidade}, ${this.nome}!`);
}

// Criando um objeto para representar uma pessoa
const pessoa = {
    nome: 'Maria'
};

// Usando o método bind para criar uma nova função com o 'this' definido como o objeto pessoa
const mensagemBoasVindas = boasVindas.bind(pessoa, 'F', 'São Paulo');

// Chamando a função criada com bind
mensagemBoasVindas(); // Saída: Bem-vinda a São Paulo, Maria!
