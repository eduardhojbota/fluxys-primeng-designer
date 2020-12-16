import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataViewComponent } from './data-view/data-view.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { TableComponent } from './table/table.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TreeComponent } from './tree/tree.component';
import {TreeTableComponent} from './tree-table/tree-table.component';
import {VirtualScrollerComponent} from './virtual-scroller/virtual-scroller.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'orderlist', component: OrderListComponent },
  { path: 'picklist', component: PickListComponent },
  { path: 'dataview', component: DataViewComponent },
  { path: 'organizationchart', component: OrganizationChartComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'treetable', component: TreeTableComponent },
  { path: 'virtualscroller', component: VirtualScrollerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
