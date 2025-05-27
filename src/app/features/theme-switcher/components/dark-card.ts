import { ThemedCard } from '../types';

export class DarkCard implements ThemedCard {
  render(): string {
    return 'Dark themed card';
  }
}
