import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  providers: [MessageService],
})
export class MessagesComponent implements OnInit {
  msgs1: Message[];
  msgs2: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.msgs1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
    ];
  }

  addMessages(): void {
    this.msgs2 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
    ];
  }

  clearMessages(): void {
    this.msgs2 = [];
  }

  showViaService(): void {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }
}
