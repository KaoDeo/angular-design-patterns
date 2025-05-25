import { Injectable, InjectionToken } from '@angular/core';
import { CondimentDecorator } from './condiment-decorator';

@Injectable({ providedIn: 'root' })
export class Mocha extends CondimentDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }
  cost(): number {
    return this.beverage.cost() + 10;
  }
}

@Injectable({ providedIn: 'root' })
export class Whip extends CondimentDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }
  cost(): number {
    return this.beverage.cost() + 20;
  }
}
