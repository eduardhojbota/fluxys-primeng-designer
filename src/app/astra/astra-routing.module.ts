import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstraComponent } from './astra.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { HomeComponent } from './home/home.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { MessagesComponent } from './messages/messages.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  {
    path: '',
    component: AstraComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'splitbutton', component: SplitButtonComponent },
      { path: 'confirmdialog', component: ConfirmDialogComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'dynamicdialog', component: DynamicDialogComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'toast', component: ToastComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'radiobutton', component: RadioButtonComponent },
      { path: 'inputswitch', component: InputSwitchComponent },
      { path: 'selectbutton', component: SelectButtonComponent },
      { path: 'badge', component: BadgeComponent },
      { path: 'card', component: CardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstraRoutingModule {}
