import { Component, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { BeverageEnum, ToppingsEnum } from '../../types';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  CONDIMENT_REGISTRY,
  Cream,
  Milk,
  Mocha,
  Soy,
  Whip,
} from '../../services/condiments.service';
import { CondimentDecorator } from '../../condiment.decorator';

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

  providers: [
    {
      provide: CONDIMENT_REGISTRY,
      useFactory: (
        mocha: Mocha,
        whip: Whip,
        soy: Soy,
        milk: Milk,
        cream: Cream
      ) => ({
        Mocha: mocha,
        Whip: whip,
        Soy: soy,
        Milk: milk,
        Cream: cream,
      }),
      deps: [Mocha, Whip, Soy, Milk, Cream],
    },
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
    {
      name: ToppingsEnum.Cream,
      value: ToppingsEnum.Cream,
    },
    {
      name: ToppingsEnum.Milk,
      value: ToppingsEnum.Milk,
    },
    {
      name: ToppingsEnum.Mocha,
      value: ToppingsEnum.Mocha,
    },
    {
      name: ToppingsEnum.Soy,
      value: ToppingsEnum.Soy,
    },
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
    @Inject(CONDIMENT_REGISTRY)
    private condiments: Record<string, CondimentDecorator>
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
    let beverage = this.coffeeCtrl?.value;

    for (const chip of this.chipSetCtrl.value) {
      const decorator = this.condiments[chip.name];
      if (decorator) {
        for (let i = 0; i < chip.value; i++) {
          beverage = decorator.decorate(beverage);
        }
      }
    }

    return beverage;
  }
}
