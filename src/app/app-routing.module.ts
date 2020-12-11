import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DocumentationComponent } from './view/documentation.component';
import { HomeComponent } from './view/home.component';
import {environment} from '../environments/environment';

const routes: Routes = environment.editor === 'code'
?[
    { path: '', loadChildren: () => import('./astra/astra.module').then((m) => m.AstraModule) },
    { path: '**', redirectTo: '' }
  ]
:[
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: '**', redirectTo: '' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
