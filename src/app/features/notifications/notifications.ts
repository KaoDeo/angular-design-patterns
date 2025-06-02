import { EmailChannel, SMSChannel, ToastChannel } from './channels';
import { NotificationService } from './notification.base';
import { Channel } from './types/channel.type';

export class EmailNotificationService extends NotificationService {
  createChannel(): Channel {
    return new EmailChannel();
  }
}

export class SMSNotificationService extends NotificationService {
  createChannel(): Channel {
    return new SMSChannel();
  }
}

export class ToastNotificationService extends NotificationService {
  createChannel(): Channel {
    return new ToastChannel();
  }
}
