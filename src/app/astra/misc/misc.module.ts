import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { SharedModule } from '../shared/shared.module';
import { BadgeComponent } from './badge/badge.component';
import { MiscRoutingModule } from './misc-routing.module';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, MiscRoutingModule, PanelModule, ButtonModule, SharedModule],
})
export class MiscModule {}
