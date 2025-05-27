import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DarkRoast, Espresso, HouseBlend } from '../../services';

import { BeverageEnum, ToppingsEnum } from '../../types';
import { Beverage } from '../../types/beverage.type';
import { CondimentFactory } from '../../services/condiment-factory.service';

@Component({
  templateUrl: './coffee-shop.component.html',
  styleUrl: './coffee-shop.component.scss',
  selector: 'coffee-shop',
  imports: [
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
  ],
})
export class CoffeeShopComponent {
  beverages: { name: string; value: string }[] = [
    {
      name: BeverageEnum.DarkRoast,
      value: BeverageEnum.DarkRoast,
    },
    {
      name: BeverageEnum.Decaf,
      value: BeverageEnum.Decaf,
    },
    {
      name: BeverageEnum.Espresso,
      value: BeverageEnum.Espresso,
    },
    {
      name: BeverageEnum.HouseBland,
      value: BeverageEnum.HouseBland,
    },
  ];

  toppings: { name: string; value: string }[] = [
    // {
    //   name: ToppingsEnum.Cream,
    //   value: ToppingsEnum.Cream,
    // },
    // {
    //   name: ToppingsEnum.Milk,
    //   value: ToppingsEnum.Milk,
    // },
    {
      name: ToppingsEnum.Mocha,
      value: ToppingsEnum.Mocha,
    },
    // {
    //   name: ToppingsEnum.Soy,
    //   value: ToppingsEnum.Soy,
    // },
    {
      name: ToppingsEnum.Whip,
      value: ToppingsEnum.Whip,
    },
  ];

  get coffeeCtrl() {
    return this.form.get('coffee');
  }

  get toppingsCtrl() {
    return this.form.get('toppings');
  }
  get quantityCtrl() {
    return this.form.get('quantity');
  }

  get chipSetCtrl() {
    return this.form.get('chipSet') as FormArray;
  }

  form = new FormGroup({
    coffee: new FormControl(),
    toppings: new FormControl(),
    quantity: new FormControl(),
    chipSet: new FormArray([]),
  });

  constructor(
    private espresso: Espresso,
    private darkRoast: DarkRoast,
    private houseBlend: HouseBlend,
    private condimentFactory: CondimentFactory
  ) {}

  onAdd() {
    const topping = this.toppingsCtrl?.value;
    const quantity = this.quantityCtrl?.value;

    this.chipSetCtrl.push(new FormControl({ name: topping, value: quantity }));
  }

  onRemove(idx: number) {
    this.chipSetCtrl.removeAt(idx);
  }

  onBuild() {
    let beverage = (() => {
      switch (this.form.value.coffee) {
        case BeverageEnum.Espresso:
          return this.espresso;
        case BeverageEnum.DarkRoast:
          return this.darkRoast;
        case BeverageEnum.HouseBland:
          return this.houseBlend;
        default:
          throw new Error('Select a coffee');
      }
    })();

    for (let ctrl of this.chipSetCtrl.controls) {
      const { name, value } = ctrl.value as {
        name: ToppingsEnum;
        value: number;
      };
      for (let i = 0; i < value; i++) {
        /**
That creates this decorator tree

Espresso
  └── Mocha
        └── Mocha
              └── Whip
*/

        beverage = this.condimentFactory.wrap(name, beverage);
      }
    }

    console.log(beverage.getDescription(), '— $' + beverage.cost().toFixed(2));
    return beverage;
  }
}
