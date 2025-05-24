import { Injectable } from '@angular/core';
import { Beverage } from '../beverage.base';

@Injectable({
  providedIn: 'root',
})
export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }
  cost(): number {
    return 150;
  }
}
