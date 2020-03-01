import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 4;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();

    headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');

    params = params.append('page', filtro.pagina.toString());

    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoDe',
       moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.append('dataVencimentoAt',
      moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
    .pipe(
      map(response => {
        const responseJson = response;

        const resultado = {
          lancamentos: responseJson['content'],
          total: responseJson['totalElements']
        };
        return resultado;
      })
    );
  }
}
