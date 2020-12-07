import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstraComponent } from './astra.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {DialogsComponent} from './dialogs/dialogs.component';

const routes: Routes = [
  {
    path: '',
    component: AstraComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'dialogs', component: DialogsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstraRoutingModule { }
