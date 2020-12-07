import { Component, ChangeDetectionStrategy } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dynamic-dialog-content',
  templateUrl: './dynamic-dialog-content.component.html',
  styles: [`.fake-content {
    width: 100%;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDialogContentComponent {
  moreContent = false;

  constructor(private readonly ref: DynamicDialogRef, readonly config: DynamicDialogConfig) {}

  close(): void {
    this.ref.close('from button');
  }
}
