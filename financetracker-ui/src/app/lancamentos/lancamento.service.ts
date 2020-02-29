import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'basic YWRtaW5AZW1hbnVlbHRvYmlhcy5jb206YWRtaW4=');
    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers })
    .pipe(
      map(res => res['content'])
);
  }
}
