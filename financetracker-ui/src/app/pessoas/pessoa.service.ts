import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 4;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

pessoasUrl = 'http://localhost:8080/pessoas';


  constructor(private http: HttpClient){ }
    pesquisar(filtro: PessoaFiltro): Observable<any> {

      let headers: HttpHeaders = new HttpHeaders();
      let params: HttpParams = new HttpParams();

      headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');

      params = params.append('page', filtro.pagina.toString());

      params = params.append('size', filtro.itensPorPagina.toString());

      if (filtro.nome) {
        params = params.append('nome', filtro.nome);
      }

      return this.http.get(`${this.pessoasUrl}`, { headers, params })
    .pipe(
      map(response => {
        const responseJson = response;

        const resultado = {
          nomes: responseJson['content'],
          total: responseJson['totalElements']
        };
        return resultado;
      })
    );
  }

    listarTodas(): Observable<any> {

      let headers: HttpHeaders = new HttpHeaders();

      headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');

      return this.http.get(`${this.pessoasUrl}`, { headers })
    .pipe(
      map(response => response['content'])
    );
   }
}
