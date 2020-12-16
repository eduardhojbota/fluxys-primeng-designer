import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import {AccordionComponent} from './accordion/accordion.component';

const routes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'card', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
