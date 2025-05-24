import { Injectable, InjectionToken } from '@angular/core';
import { Beverage } from '../beverage.base';
import { CondimentDecorator } from '../condiment.decorator';

export const CONDIMENT_REGISTRY = new InjectionToken<
  Record<string, CondimentDecorator>
>('CondimentRegistry');

@Injectable({ providedIn: 'root' })
export class Mocha {
  decorate(beverage: Beverage): Beverage {
    return new (class extends CondimentDecorator {
      getDescription(): string {
        return beverage.getDescription() + ', Mocha';
      }
      cost(): number {
        return beverage.cost() + 20;
      }
    })();
  }
}

@Injectable({ providedIn: 'root' })
export class Whip {
  decorate(beverage: Beverage): Beverage {
    return new (class extends CondimentDecorator {
      getDescription(): string {
        return beverage.getDescription() + ', Mocha';
      }
      cost(): number {
        return beverage.cost() + 20;
      }
    })();
  }
}

@Injectable({ providedIn: 'root' })
export class Soy {
  decorate(beverage: Beverage): Beverage {
    return new (class extends CondimentDecorator {
      getDescription(): string {
        return beverage.getDescription() + ', Mocha';
      }
      cost(): number {
        return beverage.cost() + 20;
      }
    })();
  }
}
