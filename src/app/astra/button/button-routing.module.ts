import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'splitbutton', component: SplitButtonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonRoutingModule {}
