import { Injectable } from '@angular/core';

import { ToastaService } from 'ngx-toasta';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toasta: ToastaService) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === `string`) {
      msg = errorResponse;
      } else {
        msg = 'Erro ao processar serviço remoto. Tente novamente';
        console.log('Ocorreu um erro', errorResponse);
      }

    this.toasta.error(msg);
   }
  }
