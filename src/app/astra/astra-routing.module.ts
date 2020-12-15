import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstraComponent } from './astra.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AstraComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'form', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
      { path: 'button', loadChildren: () => import('./button/button.module').then((m) => m.ButtonModule) },
      { path: 'data', loadChildren: () => import('./data/data.module').then((m) => m.DataModule) },
      { path: 'panel', loadChildren: () => import('./panel/panel.module').then((m) => m.PanelModule) },
      { path: 'overlay', loadChildren: () => import('./overlay/overlay.module').then((m) => m.OverlayModule) },
      { path: 'menu', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule) },
      { path: 'messages', loadChildren: () => import('./messages/messages.module').then((m) => m.MessagesModule) },
      { path: 'misc', loadChildren: () => import('./misc/misc.module').then((m) => m.MiscModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstraRoutingModule {}
