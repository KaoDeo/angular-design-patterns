import { Routes } from '@angular/router';
import { MessageSenderComponent } from './features';

export const routes: Routes = [
  {
    path: 'message-sender',
    component: MessageSenderComponent,
  },
  {
    path: '',
    redirectTo: 'message-sender',
    pathMatch: 'full',
  },
];
