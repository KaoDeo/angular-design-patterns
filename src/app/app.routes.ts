import { Routes } from '@angular/router';
import {
  AnalyticsComponent,
  AuditLogsComponent,
  MessageSenderComponent,
} from './features';

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

  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'audit-logs',
    component: AuditLogsComponent,
  },
];
