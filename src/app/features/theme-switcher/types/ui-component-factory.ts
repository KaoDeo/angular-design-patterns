import { ThemedButton } from './themed-button.type';
import { ThemedCard } from './themed-card.type';

export interface UIComponentFactory {
  createButton(): ThemedButton;
  createCard(): ThemedCard;
}
