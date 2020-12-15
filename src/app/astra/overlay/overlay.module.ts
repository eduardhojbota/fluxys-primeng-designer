import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogContentComponent } from './dynamic-dialog/dynamic-dialog-content/dynamic-dialog-content.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { ProductListDemoComponent } from './dynamic-dialog/product-list-demo/product-list-demo.component';
import { OverlayRoutingModule } from './overlay-routing.module';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    DynamicDialogContentComponent,
    ConfirmDialogComponent,
    DialogComponent,
    DynamicDialogComponent,
    ProductListDemoComponent,
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    OverlayRoutingModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    TooltipModule,
    PanelModule,
    InputTextModule,
    ToastModule,
    SharedModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    MessagesModule,
  ],
  entryComponents: [DynamicDialogContentComponent, ProductListDemoComponent],
})
export class OverlayModule {}
