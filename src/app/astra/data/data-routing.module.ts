import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import {OrderListComponent} from './order-list/order-list.component';
import {PickListComponent} from './pick-list/pick-list.component';
import {DataViewComponent} from './data-view/data-view.component';
import {OrganizationChartComponent} from './organization-chart/organization-chart.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {TimelineComponent} from './timeline/timeline.component';
import {TreeComponent} from './tree/tree.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'orderlist', component: OrderListComponent },
  { path: 'picklist', component: PickListComponent },
  { path: 'dataview', component: DataViewComponent },
  { path: 'organizationchart', component: OrganizationChartComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
