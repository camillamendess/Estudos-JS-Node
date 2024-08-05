// Criando um objeto utilizando a notação literal
const pessoa = {
    nome: "João",
    idade: 30,
    // Definindo um getter para a propriedade 'anoNascimento'
    get anoNascimento() {
      return new Date().getFullYear() - this.idade;
    },
    // Definindo um setter para a propriedade 'idade'
    set idade(novaIdade) {
      if (novaIdade > 0) {
        this._idade = novaIdade;
      } else {
        console.error("Idade inválida");
      }
    },
    // Método para exibir informações da pessoa
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  };
  
  // Acessando propriedades e métodos do objeto
  console.log(pessoa.nome); // Saída: João
  console.log(pessoa.anoNascimento); // Saída: Calcula o ano de nascimento baseado na idade atual
  pessoa.idade = 35; // Define a idade para 35 usando o setter
  pessoa.exibirInformacoes(); // Saída: Nome: João, Idade: 35
  
  // Herança em JavaScript usando prototype
  function Animal(nome) {
    this.nome = nome;
  }
  
  // Adicionando um método ao protótipo de Animal
  Animal.prototype.emitirSom = function() {
    console.log("Som do animal");
  };
  
  // Criando um objeto "Cachorro" que herda de "Animal"
  function Cachorro(nome, raca) {
    Animal.call(this, nome);
    this.raca = raca;
  }
  
  // Herdando o protótipo de Animal
  Cachorro.prototype = Object.create(Animal.prototype);
  Cachorro.prototype.constructor = Cachorro;
  
  // Adicionando um método específico para Cachorro
  Cachorro.prototype.latir = function() {
    console.log("Au au!");
  };
  
  // Criando uma instância de Cachorro
  const meuCachorro = new Cachorro("Rex", "Labrador");
  
  // Testando métodos herdados e específicos de Cachorro
  console.log(meuCachorro.nome); // Saída: Rex
  meuCachorro.emitirSom(); // Saída: Som do animal
  meuCachorro.latir(); // Saída: Au au!
  