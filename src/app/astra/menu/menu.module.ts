import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';

import { MenuRoutingModule } from './menu-routing.module';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

@NgModule({
  declarations: [TabMenuComponent],
  imports: [CommonModule, MenuRoutingModule, PanelModule, TabMenuModule],
})
export class MenuModule {}
