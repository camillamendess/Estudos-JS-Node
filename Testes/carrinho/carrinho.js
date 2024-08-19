class Carrinho {
  constructor() {
    this.itens = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  adiciona(item) {
    this.itens.push(item);
  }

  adicionaFrete(valor) {
    this.frete = valor;
  }

  calculaTotal() {
    // Calcula o subtotal somando o valor total de cada item no carrinho usando o reduce e acumulador
    this.subtotal = this.itens.reduce((acum, item) => acum + item.pegaValorTotalItem(), 0);
    // Retorna o total, que é a soma do subtotal e do frete
    return this.subtotal + this.frete;
  }

  finalizaCompra() {
    // Verifica se o carrinho está vazio. Se sim, lança um erro
    if (this.itens.length === 0) {
      throw new Error('Carrinho de compras vazio');
    }

    this.total = this.calculaTotal();

    return {
      subtotal: this.subtotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

// Exporta a classe Carrinho para ser usada em outros módulos
export default Carrinho;
