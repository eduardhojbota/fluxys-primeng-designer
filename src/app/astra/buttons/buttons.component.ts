import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  items: MenuItem[] = [
    { icon: 'fas fa-times', label: 'Delete' },
    { icon: 'fas fa-external-link-alt', label: 'Export' },
    { icon: 'fas fa-copy', label: 'Duplicate' },
  ];
}
