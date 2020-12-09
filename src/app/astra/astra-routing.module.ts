import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstraComponent } from './astra.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast/toast.component';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: AstraComponent,
    children: [
      { path: 'button', component: ButtonComponent },
      { path: 'splitbutton', component: SplitButtonComponent },
      { path: 'confirmdialog', component: ConfirmDialogComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'dynamicdialog', component: DynamicDialogComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'toast', component: ToastComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstraRoutingModule {}
