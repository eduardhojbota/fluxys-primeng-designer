import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styles: [
    `
      :host ::ng-deep .p-accordion p {
        line-height: 1.5;
        margin: 0;
      }
    `,
  ],
  providers: [MessageService],
})
export class AccordionComponent {
  activeState: boolean[] = [true, false, false];

  constructor(private messageService: MessageService) {}

  onTabClose(event): void {
    this.messageService.add({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
  }

  onTabOpen(event): void {
    this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }

  toggle(index: number): void {
    this.activeState[index] = !this.activeState[index];
  }
}
