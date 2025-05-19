import { Injectable } from '@angular/core';
import { MessageStrategy } from '../types';

@Injectable({ providedIn: 'root' })
export class BannerMessageStrategy implements MessageStrategy {
  send(message: string): void {
    const banner = document.createElement('div');
    banner.innerText = message;
    banner.style.background = '#ffeeba';
    banner.style.border = '1px solid #f0ad4e';
    banner.style.padding = '10px';
    banner.style.margin = '10px';
    banner.style.fontWeight = 'bold';
    document.body.prepend(banner);

    setTimeout(() => banner.remove(), 5000); // auto-remove
  }
}
