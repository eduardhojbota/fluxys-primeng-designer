import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  { path: 'confirmdialog', component: ConfirmDialogComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'dynamicdialog', component: DynamicDialogComponent },
  { path: 'tooltip', component: TooltipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverlayRoutingModule {}
