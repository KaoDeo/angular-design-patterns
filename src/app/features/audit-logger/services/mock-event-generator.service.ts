import { Injectable } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { DomainEvent } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MockEventGeneratorService {
  private eventTypes = [
    'USER_REGISTERED',
    'USER_LOGGED_IN',
    'PAGE_VIEWED',
    'ADMIN_ALERT',
    'DATA_SYNCED',
  ];

  constructor(private eventBusService: EventBusService) {}

  generateEvent(intervalMs = 2000) {
    setInterval(() => {
      const randomType =
        this.eventTypes[Math.floor(Math.random() * this.eventTypes.length)];
      const event: DomainEvent = {
        type: randomType,
        payload: {
          id: Math.floor(Math.random() * 1000),
          info: 'auto-generated event',
        },
      };
      this.eventBusService.emitEvent(event);
    }, intervalMs);
  }
}
