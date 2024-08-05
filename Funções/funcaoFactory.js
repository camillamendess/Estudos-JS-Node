// Uma função factory é uma função que retorna um objeto. É útil para criar várias instâncias de um objeto com configurações diferentes. 

// Definindo uma função factory para criar objetos Pessoa
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        saudacao: function() {
            console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
        }
    };
}

// Criando instâncias de Pessoa usando a função factory
const pessoa1 = criarPessoa("João", 30);
const pessoa2 = criarPessoa("Maria", 25);

// Chamando o método saudacao das instâncias
pessoa1.saudacao(); // Saída: Olá, meu nome é João e eu tenho 30 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e eu tenho 25 anos.
