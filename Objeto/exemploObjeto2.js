// Definindo uma função construtora para criar objetos do tipo Pessoa
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  // Adicionando um método ao protótipo de Pessoa
  Pessoa.prototype.exibirInformacoes = function() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  };
  
  // Criando um objeto "Estudante" que herda de "Pessoa"
  function Estudante(nome, idade, curso) {
    // Chamando o construtor da classe pai usando 'call'
    Pessoa.call(this, nome, idade);
    this.curso = curso;
  }
  
  // Herdando o protótipo de Pessoa
  Estudante.prototype = Object.create(Pessoa.prototype);
  Estudante.prototype.constructor = Estudante;
  
  // Adicionando um método específico para Estudante
  Estudante.prototype.exibirCurso = function() {
    console.log(`Curso: ${this.curso}`);
  };
  
  // Criando uma instância de Estudante
  const estudante1 = new Estudante("Maria", 20, "Engenharia");
  
  // Testando métodos herdados e específicos de Estudante
  estudante1.exibirInformacoes(); // Saída: Nome: Maria, Idade: 20
  estudante1.exibirCurso(); // Saída: Curso: Engenharia
  