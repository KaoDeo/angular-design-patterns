import { Injectable } from '@angular/core';
import { Beverage } from '../types/beverage.type';

@Injectable({
  providedIn: 'root',
})
export class HouseBlend implements Beverage {
  getDescription(): string {
    return 'house blend';
  }
  cost(): number {
    return 1.9;
  }
}
