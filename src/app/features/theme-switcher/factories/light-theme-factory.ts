import { Injectable } from '@angular/core';
import { UIComponentFactory } from '../types/ui-component-factory';
import { ThemedButton, ThemedCard } from '../types';
import { LightButton } from '../components/light-button';
import { LightCard } from '../components/light-card';

@Injectable()
export class LightThemeFactory implements UIComponentFactory {
  createButton(): ThemedButton {
    return new LightButton();
  }

  createCard(): ThemedCard {
    return new LightCard();
  }
}
