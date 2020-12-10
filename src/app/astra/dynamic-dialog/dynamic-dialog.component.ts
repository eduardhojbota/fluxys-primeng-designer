import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';

import { Product } from '../../domain/model';
import { DynamicDialogContentComponent } from './dynamic-dialog-content/dynamic-dialog-content.component';
import { ProductListDemoComponent } from './product-list-demo/product-list-demo.component';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  providers: [DialogService, MessageService],
})
export class DynamicDialogComponent implements OnDestroy {
  ref: DynamicDialogRef;
  neutralRef: DynamicDialogRef;
  wdRef: DynamicDialogRef;
  daRef: DynamicDialogRef;

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  show(): void {
    this.ref = this.dialogService.open(ProductListDemoComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });
  }

  showDynamicNeutral(): void {
    this.neutralRef = this.dialogService.open(DynamicDialogContentComponent, {
      header: 'Pop-up title',
      footer: 'Dynamic Dialog Footer',
      width: '70vw',
    });
    this.neutralRef.onClose.pipe(take(1)).subscribe((res) => {
      // do something based on res
      console.log('dynamic dialog result', res);
    });
  }

  showDynamicWithinDay(): void {
    this.wdRef = this.dialogService.open(DynamicDialogContentComponent, {
      header: 'Pop-up title',
      footer: 'Dynamic Dialog Footer',
      width: '70vw',
      styleClass: 'flx-within-day',
    });
    this.wdRef.onClose.pipe(take(1)).subscribe((res) => {
      // do something based on res
      console.log('dynamic dialog result', res);
    });
  }

  showDynamicDayAhead(): void {
    this.daRef = this.dialogService.open(DynamicDialogContentComponent, {
      header: 'Pop-up title',
      footer: 'Dynamic Dialog Footer',
      width: '70vw',
      styleClass: 'flx-day-ahead',
    });
    this.daRef.onClose.pipe(take(1)).subscribe((res) => {
      // do something based on res
      console.log('dynamic dialog result', res);
    });
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }

    if (this.neutralRef) {
      this.neutralRef.close();
    }

    if (this.wdRef) {
      this.wdRef.close();
    }

    if (this.daRef) {
      this.daRef.close();
    }
  }
}
