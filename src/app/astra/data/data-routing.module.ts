import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import {OrderListComponent} from './order-list/order-list.component';
import {PickListComponent} from './pick-list/pick-list.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'orderlist', component: OrderListComponent },
  { path: 'picklist', component: PickListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
