import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MessageStrategy } from '../types';
import { MESSAGE_STRATEGIES } from '../pages/message-sender.component';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services';

@Component({
  selector: 'message-sender-select',
  templateUrl: './message-sender-select.component.html',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  styleUrl: './message-sender-select.component.scss',
  providers: [MessageService],
})
export class MessageSenderSelectComponent {
  @Input() strategies: string[] = [];
  selected = new FormControl();
  constructor(private messageService: MessageService) {}

  send() {
    const strategy = this.selected.value;

    this.messageService.send(
      strategy,
      `Hi, you are using ${strategy} strategy`
    );
  }
}
