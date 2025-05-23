import { Injectable } from '@angular/core';
import { DomainEvent, Observer, Subject } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EventBusService implements Subject {
  observers: Observer[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers(event: DomainEvent): void {
    for (const o of this.observers) {
      o.update(event);
    }
  }

  emitEvent(event: DomainEvent): void {
    event.timestamp = new Date();
    this.notifyObservers(event);
  }
}
