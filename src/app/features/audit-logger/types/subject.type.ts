import { DomainEvent } from './domain-event.type';
import { Observer } from './observer.type';

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(event: DomainEvent): void;
}
