import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { DomainEvent, Observer } from '../types';
import { MockEventGeneratorService } from '../services/mock-event-generator.service';
import { EventBusService } from '../services/event-bus.service';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  templateUrl: './audit-logs.page.html',
  imports: [MatChipsModule, CommonModule, DatePipe],

  providers: [MockEventGeneratorService],
})
export class AuditLogsComponent implements Observer, OnInit {
  logs: WritableSignal<DomainEvent[] | []> = signal([]);

  constructor(
    private mockEventGenerator: MockEventGeneratorService,
    private eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this.eventBus.registerObserver(this);
    this.mockEventGenerator.generateEvent();
  }

  update(event: DomainEvent | null): void {
    if (event) {
      this.logs.update((prev) => [...prev, event]);
    }
  }
}
