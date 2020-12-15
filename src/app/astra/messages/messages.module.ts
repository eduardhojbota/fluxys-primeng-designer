import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule as PrimengMessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [MessagesComponent, ToastComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    PanelModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    PrimengMessagesModule,
    MessageModule,
  ],
})
export class MessagesModule {}
