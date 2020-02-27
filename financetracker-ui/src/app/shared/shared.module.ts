import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class SharedModule { }
