import { Component, InjectionToken, Injector } from '@angular/core';
import { MessageSenderSelectComponent } from '../components/message-sender-select.component';
import { MessageStrategy } from '../types';
import {
  BannerMessageStrategy,
  ConsoleLogStrategy,
  SnackbarMessageStrategy,
  ToastMessageStrategy,
} from '../services';

export const MESSAGE_STRATEGIES = new InjectionToken<
  Record<string, MessageStrategy>
>('MessageStrategies');

@Component({
  selector: 'message-sender',
  templateUrl: './message-sender.component.html',
  imports: [MessageSenderSelectComponent],
  // providers: [
  //   {
  //     provide: MESSAGE_STRATEGIES,
  //     useFactory: (
  //       toast: ToastMessageStrategy,
  //       snackbar: SnackbarMessageStrategy,
  //       log: ConsoleLogStrategy,
  //       banner: BannerMessageStrategy
  //     ) => ({
  //       toast,
  //       snackbar,
  //       log,
  //       banner,
  //     }),
  //     deps: [
  //       ToastMessageStrategy,
  //       SnackbarMessageStrategy,
  //       ConsoleLogStrategy,
  //       BannerMessageStrategy,
  //     ],
  //   },
  // ],

  providers: [
    {
      provide: MESSAGE_STRATEGIES,
      useFactory: (injector: Injector) => ({
        toast: () => injector.get(ToastMessageStrategy),
        snackbar: () => injector.get(SnackbarMessageStrategy),
        log: () => injector.get(ConsoleLogStrategy),
        banner: () => injector.get(BannerMessageStrategy),
      }),
      deps: [Injector],
    },
  ],
})
export class MessageSenderComponent {
  strategies = ['toast', 'snackbar', 'log', 'banner'];
}
