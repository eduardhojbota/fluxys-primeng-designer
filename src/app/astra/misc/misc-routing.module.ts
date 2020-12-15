import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeComponent } from './badge/badge.component';

const routes: Routes = [{ path: 'badge', component: BadgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscRoutingModule {}
