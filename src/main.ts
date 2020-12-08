import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare function require(name: string): any;

if (environment.production) {
  enableProdMode();
}

if (environment.editor === 'code') {
  require('style-loader!./sass/themes/fluxys/theme.scss');
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
