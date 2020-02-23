import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {


  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra Veiculo', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: new Date(2020, 2, 23), valor: 12000, pessoa: 'Teste1' },
      { tipo: 'RECEITA', descricao: 'Venda de produtos', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: null, valor: 150, pessoa: 'Teste2' },
      { tipo: 'RECEITA', descricao: 'Recebimento divida fulano', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: null, valor: 1290, pessoa: 'Teste2' },
      { tipo: 'DESPESA', descricao: 'Combustivel', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: null, valor: 390, pessoa: 'Teste2' },
      { tipo: 'DESPESA', descricao: 'Alimentação', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: new Date(2020, 2, 23), valor: 9999, pessoa: 'Teste3' },
      { tipo: 'RECEITA', descricao: 'Teste2', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: null, valor: 2780, pessoa: 'Teste2' },
      { tipo: 'DESPESA', descricao: 'Teste2', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: null, valor: 5389, pessoa: 'Teste2' },
      { tipo: 'DESPESA', descricao: 'Teste3', dataVencimento: new Date(2020, 2, 27),
      dataPagamento: new Date(2020, 2, 23), valor: 9999, pessoa: 'Teste3' }
    ];

}
