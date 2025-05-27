import { Injectable } from '@angular/core';
import { DarkButton } from '../components/dark-button';
import { DarkCard } from '../components/dark-card';
import { ThemedButton, ThemedCard } from '../types';
import { UIComponentFactory } from '../types/ui-component-factory';

@Injectable()
export class DarkThemeFactory implements UIComponentFactory {
  createButton(): ThemedButton {
    return new DarkButton();
  }

  createCard(): ThemedCard {
    return new DarkCard();
  }
}
