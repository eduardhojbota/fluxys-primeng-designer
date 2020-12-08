import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';

import { AstraRoutingModule } from './astra-routing.module';
import { AstraComponent } from './astra.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { DynamicDialogContentComponent } from './dialogs/dynamic-dialog-content/dynamic-dialog-content.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast/toast.component';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';

@NgModule({
  declarations: [AstraComponent, DialogsComponent, DynamicDialogContentComponent, MessagesComponent, ToastComponent, ButtonComponent, SplitButtonComponent],
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
    MessagesModule,
    MessageModule,
    ToastModule,
    InputTextModule,
    RippleModule,
    MenuModule,
  ],
  entryComponents: [DynamicDialogContentComponent]
})
export class AstraModule { }
