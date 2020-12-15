import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { OrderListComponent } from './order-list/order-list.component';
import { PickListComponent } from './pick-list/pick-list.component';
import {OrderListModule} from 'primeng/orderlist';
import {PickListModule} from 'primeng/picklist';


@NgModule({
  declarations: [TableComponent, OrderListComponent, PickListComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    TableModule,
    PanelModule,
    ProgressBarModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    OrderListModule,
    PickListModule,
  ]
})
export class DataModule { }
