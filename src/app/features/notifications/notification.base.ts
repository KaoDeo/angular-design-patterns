import { Channel } from './types/channel.type';

export abstract class NotificationService {
  abstract createChannel(): Channel;

  notify(message: string) {
    const channel = this.createChannel();
    channel.send(message);
  }
}
