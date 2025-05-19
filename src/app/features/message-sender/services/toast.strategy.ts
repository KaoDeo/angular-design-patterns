import { Injectable } from '@angular/core';
import { MessageStrategy } from '../types';

@Injectable({ providedIn: 'root' })
export class ToastMessageStrategy implements MessageStrategy {
  instanceCount = 0;

  constructor() {
    this.instanceCount++;
    console.log(`Instance created (count: ${this.instanceCount})`);
  }

  send(message: string): void {
    // For demo: use alert as a toast placeholder
    alert(`TOAST: ${message}`);
  }
}
