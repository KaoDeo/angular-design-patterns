export abstract class Beverage {
  description: string = 'Unknown Beverage';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}
