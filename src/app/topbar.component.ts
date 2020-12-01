import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html'
})
export class TopBarComponent {
    
    constructor(public router: Router) {}

    @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

    onMenuButtonClick(event: Event) {
        this.menuButtonClick.emit();
        event.preventDefault();
    }
}
