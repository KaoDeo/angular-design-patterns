import { Channel } from './types/channel.type';

export class EmailChannel implements Channel {
  send(message: string): void {
    console.log(`📧 Sending EMAIL: ${message}`);
  }
}

export class SMSChannel implements Channel {
  send(message: string): void {
    console.log(`📱 Sending SMS: ${message}`);
  }
}

export class ToastChannel implements Channel {
  send(message: string): void {
    console.log(`🔔 Showing TOAST: ${message}`);
  }
}
