import { Component } from '@angular/core';
import { LancamentosService } from "./service/lancamentos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'algamoney-ui';

  cols: any = [
    { field: 'tipo', header: 'Tipo' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'dataVencimento', header: 'Data de Vencimento' },
    { field: 'dataPagamento', header: 'Data de Pagamento' },
    { field: 'valor', header: 'Valor' },
    { field: 'pessoa', header: 'Pessoa' },
  ]

  lancamentos = [];

  constructor(private lancamentoService: LancamentosService) {}

  ngOnInit(): void {
    this.lancamentos = this.lancamentoService.getLancamentos();
  }
}
