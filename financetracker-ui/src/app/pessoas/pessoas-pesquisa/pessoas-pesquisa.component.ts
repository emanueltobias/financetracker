import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Emanuel', cidade: 'Uberaba', estado: 'MG', ativo: false },
    { nome: 'Emanuel2', cidade: 'Uberaba', estado: 'MG', ativo: true },
    { nome: 'Emanuel3', cidade: 'Uberaba', estado: 'MG', ativo: true },
    { nome: 'Emanuel4', cidade: 'Uberaba', estado: 'MG', ativo: false },
    { nome: 'Emanuel5', cidade: 'Uberaba', estado: 'MG', ativo: false },
    { nome: 'Emanuel6', cidade: 'Uberaba', estado: 'MG', ativo: false }
  ];

}
