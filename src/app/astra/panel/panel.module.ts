import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule as PrimengPanelModule } from 'primeng/panel';

import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { PanelRoutingModule } from './panel-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import {AccordionModule} from 'primeng/accordion';
import { FieldsetComponent } from './fieldset/fieldset.component';
import {FieldsetModule} from 'primeng/fieldset';
import { PanelComponent } from './panel/panel.component';
import {ToastModule} from 'primeng/toast';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [CardComponent, AccordionComponent, FieldsetComponent, PanelComponent],
  imports: [CommonModule, PanelRoutingModule, CardModule, PrimengPanelModule, ButtonModule, SharedModule, AccordionModule, FieldsetModule, ToastModule, MenuModule],
})
export class PanelModule {}
