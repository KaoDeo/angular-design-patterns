import { DomainEvent } from './domain-event.type';

export interface Observer {
  update(event: DomainEvent): void;
}
