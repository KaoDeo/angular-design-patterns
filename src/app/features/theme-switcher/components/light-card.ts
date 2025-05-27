import { ThemedCard } from '../types';

export class LightCard implements ThemedCard {
  render(): string {
    return 'Light themed card';
  }
}
