import { Injectable } from '@angular/core';
import { MessageStrategy } from '../types';

@Injectable({ providedIn: 'root' })
export class ConsoleLogStrategy implements MessageStrategy {
  send(message: string): void {
    console.log(`LOG: ${message}`);
  }
}
