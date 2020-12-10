import { trigger, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('intro', [transition(':leave', [animate('.3s', style({ opacity: 0 }))])])],
})
export class AppComponent implements OnInit {
  codeEditor: boolean;

  theme: string;

  ripple: boolean;

  initialized: boolean;

  sidebarActive: boolean;

  inputStyle = 'outlined';

  themeStyle: HTMLElement;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.codeEditor = environment.editor === 'code';
    this.primengConfig.ripple = true;
  }

  onMenuButtonClick(): void {
    this.sidebarActive = true;
  }

  inputStyleChange(value: string): void {
    this.inputStyle = value;
  }

  onCompile(value: string): void {
    if (!this.initialized) {
      this.initialized = true;
    }

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css'; // eslint-disable-line import/no-deprecated
    styleElement.appendChild(document.createTextNode(value));
    document.getElementsByTagName('head')[0].appendChild(styleElement);

    if (this.themeStyle) {
      this.themeStyle.remove();
    }

    this.themeStyle = styleElement;
  }

  onThemeSelect(theme: string): void {
    this.theme = theme;
  }

  onRestart(): void {
    this.theme = null;
    this.initialized = false;
  }
}
