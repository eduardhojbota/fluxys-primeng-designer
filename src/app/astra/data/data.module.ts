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


@NgModule({
  declarations: [TableComponent],
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
  ]
})
export class DataModule { }
