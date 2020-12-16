import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { PanelModule as PrimengPanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ScrollPanelComponent } from './scroll-panel/scroll-panel.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    CardComponent,
    AccordionComponent,
    FieldsetComponent,
    PanelComponent,
    ScrollPanelComponent,
    TabViewComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    CardModule,
    PrimengPanelModule,
    ButtonModule,
    SharedModule,
    AccordionModule,
    FieldsetModule,
    ToastModule,
    MenuModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,
    SplitButtonModule,
  ],
})
export class PanelModule {}
