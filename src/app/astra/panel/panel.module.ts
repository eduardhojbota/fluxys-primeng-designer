import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule as PrimengPanelModule } from 'primeng/panel';

import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { PanelRoutingModule } from './panel-routing.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, PanelRoutingModule, CardModule, PrimengPanelModule, ButtonModule, SharedModule],
})
export class PanelModule {}
