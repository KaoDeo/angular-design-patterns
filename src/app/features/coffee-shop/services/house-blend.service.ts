import { Injectable } from '@angular/core';
import { Beverage } from '../beverage.base';

@Injectable({
  providedIn: 'root',
})
export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend';
  }
  cost(): number {
    return 100;
  }
}
