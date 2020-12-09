import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopBarComponent {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) {}

  onMenuButtonClick(event: Event): void {
    this.menuButtonClick.emit();
    event.preventDefault();
  }
}
