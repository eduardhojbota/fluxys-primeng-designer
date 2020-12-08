import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styles: [`p-splitbutton { margin: 0 0.5rem 0.5rem 0; }`],
  providers: [MessageService],
})
export class SplitButtonComponent implements OnInit {
  items: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }

  save(severity: string): void {
    this.messageService.add({severity, summary: 'Success', detail: 'Data Saved'});
  }

  update(): void {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'});
  }

  delete(): void {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Deleted'});
  }
}
