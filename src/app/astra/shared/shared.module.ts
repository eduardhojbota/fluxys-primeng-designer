import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  imports: [CommonModule],
  exports: [CodeComponent],
})
export class SharedModule {}
