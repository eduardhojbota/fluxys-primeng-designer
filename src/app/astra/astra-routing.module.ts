import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstraComponent } from './astra.component';
import {ButtonsComponent} from './buttons/buttons.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AstraComponent },
  { path: 'buttons', component: ButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstraRoutingModule { }
