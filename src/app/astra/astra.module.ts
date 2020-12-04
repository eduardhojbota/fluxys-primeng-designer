import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstraRoutingModule } from './astra-routing.module';
import { AstraComponent } from './astra.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [AstraComponent, ButtonsComponent],
  imports: [
    CommonModule,
    AstraRoutingModule
  ]
})
export class AstraModule { }
