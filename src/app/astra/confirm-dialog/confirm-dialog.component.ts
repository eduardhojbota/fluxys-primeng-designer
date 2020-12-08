import { Component } from '@angular/core';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
  providers: [ConfirmationService]
})
export class ConfirmDialogComponent {
  msgs: Message[] = [];
  position: string;

  constructor(private readonly confirmationService: ConfirmationService) {}

  confirm1(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

  confirm2(): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

  confirmPosition(position: string): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      },
      key: "positionDialog"
    });
  }

  confirmNeutral(): void {
    this.confirmationService.confirm({
      key: 'normalCD',
      message: 'Dialog is a container to display content in an overlay window.',
    });
  }

  confirmWithinDay(): void {
    this.confirmationService.confirm({
      key: 'withinDayCD',
      message: 'Dialog is a container to display content in an overlay window.',
    });
  }

  confirmDayAhead(): void {
    this.confirmationService.confirm({
      key: 'dayAheadCD',
      message: 'Dialog is a container to display content in an overlay window.',
    });
  }

  confirmWarning(): void {
    this.confirmationService.confirm({
      key: 'warningCD',
      message: 'Dialog is a container to display content in an overlay window.',
      icon: 'pi pi-exclamation-circle',
    });
  }
}
