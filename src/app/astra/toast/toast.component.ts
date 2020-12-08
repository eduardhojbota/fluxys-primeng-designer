import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  providers: [MessageService]
})
export class ToastComponent {
  constructor(private messageService: MessageService) { }

  showSuccess(): void {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Message Content'});
  }

  showInfo(): void {
    this.messageService.add({severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showWarn(): void {
    this.messageService.add({severity: 'warn', summary: 'Warn', detail: 'Message Content'});
  }

  showError(): void {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Message Content'});
  }

  showTopLeft(): void {
    this.messageService.add({key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showTopCenter(): void {
    this.messageService.add({key: 'tc', severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showBottomCenter(): void {
    this.messageService.add({key: 'bc', severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showConfirm(): void {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed'});
  }

  showMultiple(): void {
    this.messageService.addAll([
      {severity: 'info', summary: 'Message 1', detail: 'Message Content'},
      {severity: 'info', summary: 'Message 2', detail: 'Message Content'},
      {severity: 'info', summary: 'Message 3', detail: 'Message Content'}
    ]);
  }

  showSticky(): void {
    this.messageService.add({severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true});
  }

  onConfirm(): void {
    this.messageService.clear('c');
  }

  onReject(): void {
    this.messageService.clear('c');
  }

  clear(): void {
    this.messageService.clear();
  }
}
