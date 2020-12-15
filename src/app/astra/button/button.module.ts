import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule as PrimengButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

import { SharedModule } from '../shared/shared.module';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';

@NgModule({
  declarations: [ButtonComponent, SplitButtonComponent],
  imports: [CommonModule, ButtonRoutingModule, PrimengButtonModule, SplitButtonModule, PanelModule, SharedModule, ToastModule],
})
export class ButtonModule {}
