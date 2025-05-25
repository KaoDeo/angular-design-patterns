import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Beverage } from '../types/beverage.type';

export const BEVERAGE = new InjectionToken<Beverage>('BEVERAGE');

@Injectable()
export abstract class CondimentDecorator implements Beverage {
  constructor(@Inject(BEVERAGE) protected beverage: Beverage) {}
  abstract getDescription(): string;
  abstract cost(): number;
}
