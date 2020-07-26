import { Component } from '@angular/core';
import { LancamentosService } from "./service/lancamentos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'algamoney-ui';

  cols: any = []

  first = 0;

  rows = 5;

  lancamentos = [];

  constructor(private lancamentoService: LancamentosService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'pessoa', header: 'Pessoa', class: '' },
      { field: 'descricao', header: 'Descrição', class: '' },
      { field: 'dataVencimento', header: 'Vencimento', class: 'col-data' },
      { field: 'dataPagamento', header: 'Pagamento', class: 'col-data' },
      { field: 'valor', header: 'Valor', class: 'col-valor-header' },
      { field: 'opcoes', header: '', class: 'col-options-header' },
    ];
    this.lancamentos = this.lancamentoService.getLancamentos();
  }

  /**
   * Programmatic controls to pagination
   */

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === (this.lancamentos.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
}
