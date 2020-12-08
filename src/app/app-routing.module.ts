import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './view/home.component';
import { DocumentationComponent } from './view/documentation.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', component: HomeComponent },
        { path: 'documentation', component: DocumentationComponent },
        { path: 'astra', loadChildren: () => import('./astra/astra.module').then((m) => m.AstraModule) },
        { path: '**', redirectTo: '' },
      ],
      { scrollPositionRestoration: 'enabled', enableTracing: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
