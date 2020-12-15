import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';

import { AstraRoutingModule } from './astra-routing.module';
import { AstraComponent } from './astra.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AstraComponent, HomeComponent],
  imports: [CommonModule, AstraRoutingModule, MenuModule, SharedModule],
})
export class AstraModule {}
