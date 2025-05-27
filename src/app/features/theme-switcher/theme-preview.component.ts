import { Component, Inject } from '@angular/core';
import { UIComponentFactory } from './types/ui-component-factory';
import { ThemedButton, ThemedCard, ThemeEnum } from './types';
import { MatIconModule } from '@angular/material/icon';
import { LightThemeFactory } from './factories/light-theme-factory';
import { DarkThemeFactory } from './factories/dark-theme-factory';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.component.html',
  styles: `
  .btn{
    position: absolute;
    right: 10px;
    top: 10px;
  }`,
  imports: [MatButtonModule],
  providers: [LightThemeFactory, DarkThemeFactory],
})
export class ThemePreviewComponent {
  themeMap = {
    [ThemeEnum.Light]: 'Light theme',
    [ThemeEnum.Dark]: 'Dark theme',
  };

  theme: ThemeEnum = ThemeEnum.Light;

  buttonText = '';
  cardText = '';

  constructor(
    private lightFactory: LightThemeFactory,
    private darkFactory: DarkThemeFactory
  ) {
    this.createElems(this.theme);
  }

  toggleTheme() {
    this.theme =
      this.theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;

    this.createElems(this.theme);
  }

  createElems(theme: ThemeEnum) {
    const factoryMap = {
      [ThemeEnum.Light]: this.lightFactory,
      [ThemeEnum.Dark]: this.darkFactory,
    };

    const factory = factoryMap[theme];
    if (!factory) throw new Error('Unsupported theme');

    const button = factory.createButton();
    const card = factory.createCard();

    this.buttonText = button.render();
    this.cardText = card.render();
  }
}
