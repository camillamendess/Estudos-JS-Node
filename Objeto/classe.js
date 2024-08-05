// Definição da classe Pessoa
class Pessoa {
    // Construtor da classe Pessoa
    constructor(nome, idade) {
      // Definição de propriedades da instância
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método da classe Pessoa para exibir informações
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  }
  
  // Definição da classe Funcionario que herda de Pessoa
  class Funcionario extends Pessoa {
    // Construtor da classe Funcionario
    constructor(nome, idade, cargo) {
      // Chamada ao construtor da classe pai (Pessoa)
      super(nome, idade);
      // Definição de propriedade específica da classe Funcionario
      this.cargo = cargo;
    }
  
    // Método da classe Funcionario para exibir informações incluindo o cargo
    exibirInformacoes() {
      // Chamada ao método exibirInformacoes da classe pai (Pessoa)
      super.exibirInformacoes();
      console.log(`Cargo: ${this.cargo}`);
    }
  }
  
  // Criando uma instância da classe Funcionario
  const funcionario1 = new Funcionario("João", 30, "Desenvolvedor");
  
  // Acessando o método exibirInformacoes da instância funcionario1
  funcionario1.exibirInformacoes();
  