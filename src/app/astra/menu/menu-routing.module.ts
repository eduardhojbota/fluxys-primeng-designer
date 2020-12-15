import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMenuComponent } from './tab-menu/tab-menu.component';

const routes: Routes = [{ path: 'tabmenu', component: TabMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
