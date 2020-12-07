import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {DynamicDialogContentComponent} from './dynamic-dialog-content/dynamic-dialog-content.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styles: [`.fake-content {
    width: 450px;
    height: 250px;
  }`],
  providers: [ConfirmationService, DialogService],
})
export class DialogsComponent {
  neutralDialogVisible = false;
  withinDayDialogVisible = false;
  dayAheadDialogVisible = false;

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly dialogService: DialogService
  ) {}

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

  showDynamicNeutral(): void {
    const ref = this.dialogService.open(DynamicDialogContentComponent, {
      header: 'Pop-up title',
      footer: 'Dynamic Dialog Footer',
      width: '70vw',
    });
    ref.onClose.pipe(take(1)).subscribe((res) => {
      // do something based on res
      console.log('dynamic dialog result', res);
    });
  }

  showDynamicWithinDay(): void {
    const ref = this.dialogService.open(DynamicDialogContentComponent, {
      header: 'Pop-up title',
      footer: 'Dynamic Dialog Footer',
      width: '70vw',
      styleClass: 'flx-within-day',
    });
    ref.onClose.pipe(take(1)).subscribe((res) => {
      // do something based on res
      console.log('dynamic dialog result', res);
    });
  }

  showDynamicDayAhead(): void {
    const ref = this.dialogService.open(DynamicDialogContentComponent, {
      header: 'Pop-up title',
      footer: 'Dynamic Dialog Footer',
      width: '70vw',
      styleClass: 'flx-day-ahead',
    });
    ref.onClose.pipe(take(1)).subscribe((res) => {
      // do something based on res
      console.log('dynamic dialog result', res);
    });
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
