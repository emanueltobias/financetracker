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


  constructor(private http: HttpClient) { }

    pesquisar(filtro: PessoaFiltro): Promise<any> {

      let headers: HttpHeaders = new HttpHeaders();
      let params: HttpParams = new HttpParams();

      headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');

      params = params.append('page', filtro.pagina.toString());

      params = params.append('size', filtro.itensPorPagina.toString());

      if (filtro.nome) {
        params = params.append('nome', filtro.nome);
      }

      return this.http.get<any>(`${this.pessoasUrl}`, { params, headers })
      .toPromise()
      .then(response => {
        const pessoas = response.content;

        const resultado = {
          pessoas,
          total: response.totalElements
        };

        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.pessoasUrl)
      .toPromise()
      .then(response => response.content);
  }

  excluir(codigo: number): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');
    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

}
