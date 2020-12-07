import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  providers: [ConfirmationService],
})
export class DialogsComponent {
  constructor(private readonly confirmationService: ConfirmationService) {}

  confirmNormal(): void {
    this.confirmationService.confirm({
      key: 'normalCD',
      message: 'Dialog is a container to display content in an overlay window.',
      accept: () => alert('You accepted in the confirmation dialog.'),
      reject: () => alert('You rejected in the confirmation dialog.'),
    });
  }

  confirmWD(): void {
    this.confirmationService.confirm({
      key: 'withinDayCD',
      message: 'Dialog is a container to display content in an overlay window.',
      accept: () => alert('You accepted in the confirmation dialog.'),
      reject: () => alert('You rejected in the confirmation dialog.'),
    });
  }

  confirmDA(): void {
    this.confirmationService.confirm({
      key: 'dayAheadCD',
      message: 'Dialog is a container to display content in an overlay window.',
      accept: () => alert('You accepted in the confirmation dialog.'),
      reject: () => alert('You rejected in the confirmation dialog.'),
    });
  }
}
