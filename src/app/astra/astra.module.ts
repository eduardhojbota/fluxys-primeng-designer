import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {CheckboxModule} from 'primeng/checkbox';

import { AstraRoutingModule } from './astra-routing.module';
import { AstraComponent } from './astra.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { DynamicDialogContentComponent } from './dialogs/dynamic-dialog-content/dynamic-dialog-content.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AstraComponent, ButtonsComponent, DialogsComponent, DynamicDialogContentComponent],
  imports: [
    CommonModule,
    AstraRoutingModule,
    ButtonModule,
    PanelModule,
    SplitButtonModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    CheckboxModule,
    FormsModule,
  ],
  entryComponents: [DynamicDialogContentComponent]
})
export class AstraModule { }
