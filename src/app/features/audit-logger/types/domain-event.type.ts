export interface DomainEvent {
  type: string;
  payload: any;
  timestamp?: Date;
}
