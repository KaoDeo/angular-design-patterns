import { Injectable } from '@angular/core';
import { Beverage } from '../beverage.base';

@Injectable({
  providedIn: 'root',
})
export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Dark Roast';
  }
  cost(): number {
    return 120;
  }
}
