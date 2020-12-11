import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { AstraRoutingModule } from './astra-routing.module';
import { AstraComponent } from './astra.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CodeComponent } from './code.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogContentComponent } from './dynamic-dialog/dynamic-dialog-content/dynamic-dialog-content.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { ProductListDemoComponent } from './dynamic-dialog/product-list-demo/product-list-demo.component';
import { HomeComponent } from './home/home.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { MessagesComponent } from './messages/messages.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { ToastComponent } from './toast/toast.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';

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
    CheckboxComponent,
    RadioButtonComponent,
    InputSwitchComponent,
    SelectButtonComponent,
    BadgeComponent,
    CardComponent,
    TabMenuComponent,
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
    RadioButtonModule,
    InputSwitchModule,
    SelectButtonModule,
    CardModule,
    TabMenuModule,
  ],
  entryComponents: [DynamicDialogContentComponent, ProductListDemoComponent],
})
export class AstraModule {}
