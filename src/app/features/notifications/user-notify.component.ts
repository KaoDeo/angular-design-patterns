import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChannelsEnum } from './types/channel.enum';
import { NotificationService } from './notification.base';
import {
  EmailNotificationService,
  SMSNotificationService,
  ToastNotificationService,
} from './notifications';

@Component({
  selector: 'app-notify-user',
  template: `
    <form [formGroup]="form">
      <mat-form-field>
        <mat-label>Channels</mat-label>
        <mat-select formControlName="channel" name="food">
          <mat-option>None</mat-option>
          @for (channel of channels; track channel) {
          <mat-option [value]="channel.value">{{ channel.name }}</mat-option>
          }
        </mat-select>
      </mat-form-field>

      <mat-form-field class="example-form-field">
        <mat-label>MSG</mat-label>
        <input matInput type="text" formControlName="msg" />
      </mat-form-field>
    </form>

    <button matButton="filled" (click)="send()">Send</button>
  `,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class NotifyUserComponent {
  get channelCtrl() {
    return this.form.get('channel');
  }

  get msgCtrl() {
    return this.form.get('msg');
  }

  channels: { value: string; name: string }[] = [
    {
      name: 'Email',
      value: ChannelsEnum.Email,
    },
    {
      name: 'Sms',
      value: ChannelsEnum.Sms,
    },
    {
      name: 'Toast',
      value: ChannelsEnum.Toast,
    },
  ];
  form = new FormGroup({
    channel: new FormControl(ChannelsEnum.Email),
    msg: new FormControl(null),
  });

  send() {
    let service: NotificationService;

    switch (this.channelCtrl?.value) {
      case ChannelsEnum.Email:
        service = new EmailNotificationService();
        break;
      case ChannelsEnum.Sms:
        service = new SMSNotificationService();
        break;
      case ChannelsEnum.Toast:
        service = new ToastNotificationService();
        break;
      default:
        throw new Error('Unknown type');
    }

    service.notify(this.msgCtrl?.value ?? '');
  }
}
