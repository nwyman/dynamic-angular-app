import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `${(<any>window).mainTemplate || 'Loading...'}`
})
export class AppComponent {
  title = 'dynamic-angular-app';
}
