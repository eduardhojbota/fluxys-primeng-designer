import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';

import { AstraRoutingModule } from './astra-routing.module';
import { AstraComponent } from './astra.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [AstraComponent, ButtonsComponent, DialogsComponent],
  imports: [
    CommonModule,
    AstraRoutingModule,
    ButtonModule,
    PanelModule,
    SplitButtonModule,
    ConfirmDialogModule,
  ]
})
export class AstraModule { }
