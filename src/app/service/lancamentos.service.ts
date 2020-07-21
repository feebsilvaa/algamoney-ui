import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor() { }

  getLancamentos(): any {
    return [
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    ];
  }
}
