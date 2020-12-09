import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { DynamicDialogContentComponent } from './dynamic-dialog/dynamic-dialog-content/dynamic-dialog-content.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast/toast.component';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { CodeComponent } from './code.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { ProductListDemoComponent } from './dynamic-dialog/product-list-demo/product-list-demo.component';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AstraComponent,
    CodeComponent,
    DynamicDialogContentComponent,
    MessagesComponent,
    ToastComponent,
    ButtonComponent,
    SplitButtonComponent,
    ConfirmDialogComponent,
    DialogComponent,
    DynamicDialogComponent,
    ProductListDemoComponent,
    HomeComponent,
    CalendarComponent,
  ],
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
    TableModule,
    CalendarModule,
  ],
  entryComponents: [DynamicDialogContentComponent, ProductListDemoComponent],
})
export class AstraModule {}
