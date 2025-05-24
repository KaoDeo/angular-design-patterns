import { Beverage } from './beverage.base';

export abstract class CondimentDecorator extends Beverage {
  abstract override getDescription(): string;
}
