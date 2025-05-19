import { Inject, Injectable } from '@angular/core';
import { MESSAGE_STRATEGIES } from '../pages';
import { MessageStrategy } from '../types';

@Injectable()
export class MessageService {
  constructor(
    // @Inject(MESSAGE_STRATEGIES)
    // private strategies: Record<string, MessageStrategy>
    @Inject(MESSAGE_STRATEGIES)
    private strategies: Record<string, () => MessageStrategy>
  ) {}

  send(type: string, message: string) {
    //  const strategy = this.strategies[type];
    const strategy = this.strategies[type](); // create instance on demand

    if (!strategy) {
      throw new Error(`Unknown strategy: ${type}`);
    }
    strategy.send(message);
  }

  removeStrategy(name: string) {
    delete this.strategies[name];
  }

  getAvailableStrategies(): string[] {
    return Object.keys(this.strategies);
  }
}
