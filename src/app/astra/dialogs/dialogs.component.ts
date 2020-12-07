import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styles: [`.fake-content {
    width: 450px;
    height: 250px;
  }`],
  providers: [ConfirmationService],
})
export class DialogsComponent {
  neutralDialogVisible = false;
  withinDayDialogVisible = false;
  dayAheadDialogVisible = false;

  constructor(private readonly confirmationService: ConfirmationService) {}

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
      icon: 'pi pi-exclamation-circle'
    });
  }

  showNeutral(): void {
    this.neutralDialogVisible = true;
  }

  showWithinDay(): void {
    this.withinDayDialogVisible = true;
  }

  showDayAhead(): void {
    this.dayAheadDialogVisible = true;
  }

  close(): void {
    this.neutralDialogVisible = false;
    this.withinDayDialogVisible = false;
    this.dayAheadDialogVisible = false;
  }

  performAction(): void {
    // do something
    this.close();
  }
}
