import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: [`
    :host ::ng-deep .p-panel p {
      line-height: 1.5;
      margin: 0;
    }
  `],
  providers: [MessageService],
})
export class PanelComponent implements OnInit {
  items: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            this.update();
          }
        },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            }
          }
        ]},
      {
        label: 'Navigate',
        items: [{
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
        },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]}
    ];
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }
}
