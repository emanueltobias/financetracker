import { NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastaModule, ToastaComponent } from 'ngx-toasta';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { PessoaService } from '../pessoas/pessoa.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';


@NgModule({
  imports: [
    CommonModule,

    ToastaModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastaModule,
    ConfirmDialogModule,
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ErrorHandlerService,

    ConfirmationService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'pt' }
   ]
})
export class CoreModule { }
