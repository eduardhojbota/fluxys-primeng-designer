import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PanelComponent } from './panel/panel.component';
import { ScrollPanelComponent } from './scroll-panel/scroll-panel.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'card', component: CardComponent },
  { path: 'fieldset', component: FieldsetComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'scrollpanel', component: ScrollPanelComponent },
  { path: 'tabview', component: TabViewComponent },
  { path: 'toolbar', component: ToolbarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
