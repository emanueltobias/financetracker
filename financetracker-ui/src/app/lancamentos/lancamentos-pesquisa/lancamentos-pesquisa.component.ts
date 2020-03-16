import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { ToastaService } from 'ngx-toasta';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit  {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') tabela;

  constructor(
    private errorHandle: ErrorHandlerService,
    private lancamentoService: LancamentoService,
    private toastaService: ToastaService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit() {
    //this.pesquisar();
  }

  pesquisar(pagina = 0) {
  try {
      this.filtro.pagina = pagina;
      this.lancamentoService.pesquisar(this.filtro)
      .subscribe(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      });
    } catch (erro) {
      this.errorHandle.handle(erro);
    }
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    try {
        this.lancamentoService.excluir(lancamento.codigo)
        .subscribe(() => {
          if (this.tabela.first === 0) {
            this.pesquisar();
          } else {
            this.tabela.first = 0;
          }
          this.toastaService.success('Lançamento excluído com sucesso!');
        });
  } catch (erro) {
    this.errorHandle.handle(erro);
  }
  }

}
