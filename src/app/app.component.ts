import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemePreviewComponent } from './features/theme-switcher';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemePreviewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
