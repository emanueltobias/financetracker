import { LazyLoadEvent } from 'primeng/api/public_api';
import { PessoaService, PessoaFiltro } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit{

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  nomes = [];

  ngOnInit() {
    this.listarTodas();
  }

  constructor(private pessoaService: PessoaService) {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
    .subscribe(resultado => {
      this.totalRegistros = resultado.total;
      this.nomes = resultado.nomes;
    });
  }

  listarTodas() {
    this.pessoaService.listarTodas()
    .subscribe(resultado => this.nomes = resultado);

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}

