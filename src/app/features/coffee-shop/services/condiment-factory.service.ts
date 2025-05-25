import { Injectable, Injector, Type } from '@angular/core';

import { BEVERAGE, CondimentDecorator } from './condiment-decorator';
import { Mocha, Whip } from './condiments.service';
import { Beverage } from '../types/beverage.type';
import { ToppingsEnum } from '../types';

@Injectable({ providedIn: 'root' })
export class CondimentFactory {
  private registry = new Map<ToppingsEnum, Type<CondimentDecorator>>([
    [ToppingsEnum.Mocha, Mocha],
    [ToppingsEnum.Whip, Whip],
  ]);

  constructor(private injector: Injector) {}

  wrap(name: ToppingsEnum, base: Beverage): Beverage {
    const Ctor = this.registry.get(name)!;

    const child = Injector.create({
      parent: this.injector,
      providers: [
        { provide: BEVERAGE, useValue: base },
        { provide: Ctor, useClass: Ctor, deps: [BEVERAGE] },
      ],
    });

    return child.get(Ctor);
  }
}
