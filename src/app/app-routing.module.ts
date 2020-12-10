import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocumentationComponent } from './view/documentation.component';
import { HomeComponent } from './view/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', component: HomeComponent },
        { path: 'documentation', component: DocumentationComponent },
        { path: 'astra', loadChildren: () => import('./astra/astra.module').then((m) => m.AstraModule) },
        { path: '**', redirectTo: '' },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
