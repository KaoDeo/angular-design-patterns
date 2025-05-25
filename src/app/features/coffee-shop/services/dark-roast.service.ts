import { Injectable } from '@angular/core';
import { Beverage } from '../types/beverage.type';

@Injectable({
  providedIn: 'root',
})
export class DarkRoast implements Beverage {
  getDescription() {
    return 'Dark Roast';
  }
  cost() {
    return 1.99;
  }
}
