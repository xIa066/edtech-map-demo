import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent],
  template: `<h1>Welcome to EdTech Map Demo</h1>
             <app-map></app-map>`,
})
export class AppComponent {}
