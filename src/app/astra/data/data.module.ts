import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';

import { SharedModule } from '../shared/shared.module';
import { DataRoutingModule } from './data-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { TableComponent } from './table/table.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TreeComponent } from './tree/tree.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import {TreeTableModule} from 'primeng/treetable';

@NgModule({
  declarations: [
    TableComponent,
    OrderListComponent,
    PickListComponent,
    DataViewComponent,
    OrganizationChartComponent,
    PaginatorComponent,
    TimelineComponent,
    TreeComponent,
    TreeTableComponent,
  ],
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
    DataViewModule,
    RatingModule,
    OrganizationChartModule,
    ToastModule,
    PaginatorModule,
    TimelineModule,
    CardModule,
    TreeModule,
    SharedModule,
    TreeTableModule,
  ],
})
export class DataModule {}
