import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  displayModal: boolean;
  displayBasic: boolean;
  displayBasic2: boolean;
  displayMaximizable: boolean;
  displayPosition: boolean;
  position: string;
  neutralDialogVisible = false;
  withinDayDialogVisible = false;
  dayAheadDialogVisible = false;

  showModalDialog(): void {
    this.displayModal = true;
  }

  showBasicDialog(): void {
    this.displayBasic = true;
  }

  showBasicDialog2(): void {
    this.displayBasic2 = true;
  }

  showMaximizableDialog(): void {
    this.displayMaximizable = true;
  }

  showPositionDialog(position: string): void {
    this.position = position;
    this.displayPosition = true;
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
}
