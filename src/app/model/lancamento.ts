export class Lancamento {

  constructor(
    private tipo: string,
    private descricao: string,
    private dataVencimento: string,
    private valor: string,
    private pessoa: string,
    private dataPagamento?: string,
  ) {
    this.tipo = tipo;
    this.descricao = descricao;
    this.dataVencimento = dataVencimento;
    this.valor = valor;
    this.pessoa = pessoa;
    this.dataVencimento = dataPagamento ? dataPagamento : '';
  }

  
  getTipo() : string {
    return this.tipo;
  }
  
  getDescricao(): string {
    return this.descricao;
  }
  
  getDataVencimento(): string {
    return this.dataVencimento;
  }
  
  getValor(): string {
    return this.valor;
  }
  
  getPessoa(): string {
    return this.pessoa;
  }

  getDataPagamento(): string {
    return this.dataVencimento;
  }

}